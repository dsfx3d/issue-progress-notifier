import {GraphQLClient} from "graphql-request";

export function toGraphQLClient(apiToken: string): GraphQLClient {
  return new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });
}
