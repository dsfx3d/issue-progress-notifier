import {GetIssueQuery} from "../../lib/graphql";

export const GetIssue: GetIssueQuery = {
  repository: {
    issue: {
      bodyHTML: "<p>Issue body</p>",
      title: "Issue title",
      author: {
        login: "author",
      },
    },
  },
};
