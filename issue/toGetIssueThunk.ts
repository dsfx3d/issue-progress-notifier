import {
  GetIssueDocument,
  GetIssueQuery,
  GetIssueQueryVariables,
} from "../lib/graphql";
import {GraphQLClient} from "graphql-request";
import {LazyArg} from "fp-ts/lib/function";

export function toGetIssueThunk(
  client: GraphQLClient,
  variables: GetIssueQueryVariables,
): LazyArg<Promise<GetIssueQuery>> {
  return () => client.request(GetIssueDocument, variables);
}
