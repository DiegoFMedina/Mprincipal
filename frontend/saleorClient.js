import { createSaleorClient } from "@saleor/sdk";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const API_URL = process.env.NEXT_PUBLIC_SALEOR_API_URL || "http://localhost:8000/graphql/";

const saleorClient = createSaleorClient({
  apiUrl: API_URL,
  channel: "default-channel",
});

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: API_URL }),
  cache: new InMemoryCache(),
});

export { saleorClient, apolloClient };
