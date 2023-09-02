import {IssueOpenedDocument} from "$lib/graphql";
import {TTemplateResolverTuple} from "../template-compiler/TTemplateResolverTuple";
import {toIssueOpenedTemplate} from "../issue/toIssueOpenedTemplate";

export const templateResolvers: TTemplateResolverTuple[] = [
  [
    ["issues"],
    ["opened", "reopened"],
    async context => {
      const data = await context.graphqlClient.request(IssueOpenedDocument, {
        number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
      });
      return toIssueOpenedTemplate(data);
    },
  ],
];
