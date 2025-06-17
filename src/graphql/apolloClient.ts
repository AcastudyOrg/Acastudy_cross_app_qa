import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onError } from '@apollo/client/link/error';
import {
    ApolloClient,
    InMemoryCache,
    Observable,
    createHttpLink,
    ApolloLink,
    gql,
    Operation,
    NextLink
} from '@apollo/client';
import { NAV_SCREEN_NAME } from '@/constants/strings';
import { useNavigation } from '@react-navigation/native';
import { updateAuthStorage } from '@/navigation';

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

const handleTokenRefresh = (
    operation: Operation,
    forward: NextLink,
    observer: any
) => {
    (async () => {
        try {
            const refreshToken = await AsyncStorage.getItem('refreshToken');
            if (!refreshToken) {
                observer.error(new Error('No refresh token available'));
                handleLogout();
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

            if (!data.refreshToken.data) {
                observer.error(new Error('Invalid refresh token response. Logging out.'));
                handleLogout();
                return;
            }

            const newToken = data.refreshToken.data.token;
            const newRefreshToken = data.refreshToken.data.refreshToken;
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
                error: retryError => observer.error(retryError),
                complete: () => observer.complete(),
            });
        } catch (refreshError) {
            observer.error(refreshError);
            handleLogout();
        }
    })();
};

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
        for (const err of graphQLErrors) {
            if (err.extensions?.code === '491') { // Token expired
                return new Observable(observer => {
                    handleTokenRefresh(operation, forward, observer);
                });
            }
        }
    }
    if (networkError && 'statusCode' in networkError && networkError.statusCode === 491) {
        return new Observable(observer => {
            handleTokenRefresh(operation, forward, observer);
        });
    }
});

const client = new ApolloClient({
    link: ApolloLink.from([errorLink, authLink.concat(httpLink)]),
    cache: new InMemoryCache({
        typePolicies: {
            // Wrapper types
            ResponseDataOfUser: { keyFields: false },
            ResponseDataOfUsers: { keyFields: false },
            // Main entity types
            User: { keyFields: ["id"] },
            // Root query fields
            Query: {
                fields: {
                    getUser: { merge: false },
                    getAllUsers: { merge: false },
                    getAllTutors: { merge: false },
                    // Add other fields as needed
                },
            },
        },
    }),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
    },
});

const refreshTokenMutation = gql`
mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
        data {
            status,
            message,
            token,
            refreshToken
        },
        message,
        status
    }
}`;

const handleLogout = async () => {
    await updateAuthStorage('token');
    await updateAuthStorage('refreshToken');
    const navigation = useNavigation<any>();
    navigation.navigate(NAV_SCREEN_NAME.SignInScreen);
};

export default client;