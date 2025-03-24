import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onError } from '@apollo/client/link/error';
import { 
    ApolloClient, 
    InMemoryCache, 
    Observable, 
    createHttpLink, 
    ApolloLink, 
    gql 
} from '@apollo/client';

const httpLink = createHttpLink({
    uri: 'http://localhost:8080/graphql',
});

const authLink = setContext(async (_, { headers }) => {
    const token = await AsyncStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    };
});

const refreshTokenMutation = gql`
mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
        status,
        message,
        token,
        refreshToken
    }
}`;

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
        for (const err of graphQLErrors) {
            if (err.extensions?.code === '498') { // Token expired
                return new Observable(observer => {
                    (async () => {
                        try {
                            const refreshToken = await AsyncStorage.getItem('refreshToken');
                            if (!refreshToken) {
                                // Handle logout or redirect to login
                                observer.error(err);
                                return;
                            }

                            // Refresh the token
                            const client = new ApolloClient({
                                link: httpLink,
                                cache: new InMemoryCache(),
                            });

                            const { data } = await client.mutate({
                                mutation: refreshTokenMutation,
                                variables: { refreshToken },
                            });

                            const newToken = data.refreshToken.token;
                            const newRefreshToken = data.refreshToken.refreshToken;

                            // Save the new tokens
                            await AsyncStorage.setItem('token', newToken);
                            await AsyncStorage.setItem('refreshToken', newRefreshToken);

                            // Retry the failed request with the new token
                            operation.setContext(({ headers = {} }) => ({
                                headers: {
                                    ...headers,
                                    authorization: `Bearer ${newToken}`,
                                },
                            }));

                            // Retry the request
                            forward(operation).subscribe({
                                next: result => observer.next(result),
                                error: networkError => observer.error(networkError),
                                complete: () => observer.complete(),
                            });
                        } catch (refreshError) {
                            // Handle refresh token failure (e.g., logout user)
                            observer.error(refreshError);
                        }
                    })();
                });
            }
        }
    }
});

const client = new ApolloClient({
    link: ApolloLink.from([errorLink, authLink.concat(httpLink)]),
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
    },
});

export default client;