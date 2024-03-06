import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://localhost:3001/graphql", // Specify your GraphQL API endpoint here
  cache: new InMemoryCache(),
});

export default client;
