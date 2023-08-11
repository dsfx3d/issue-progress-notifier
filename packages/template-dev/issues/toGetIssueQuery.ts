import {
  GetIssueDocument,
  type GetIssueQuery,
  type GetIssueQueryVariables,
} from "@ipn/issues-gql";
import {type GraphQLClient} from "graphql-request";

export function toGetIssueQuery(
  client: GraphQLClient,
  variables: GetIssueQueryVariables,
): Promise<GetIssueQuery> {
  return client.request(GetIssueDocument, variables);
}
