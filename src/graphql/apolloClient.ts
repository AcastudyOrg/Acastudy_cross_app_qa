import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

export default client;