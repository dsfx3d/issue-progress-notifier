import {GetIssueDocument} from "@ipn/issues-gql";
import {createThunkFactory} from "@issue-notifier/graphql-request";

export const toGetIssueQuery = createThunkFactory(GetIssueDocument);
