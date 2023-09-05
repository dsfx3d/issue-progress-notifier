// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import {Issue} from "../issue/Issue";
import {IssueTemplateDocument} from "$lib/graphql";
import {TTemplateResolverTuple} from "../template-compiler/TTemplateResolverTuple";

export const templateResolvers: TTemplateResolverTuple[] = [
  [
    ["issues"],
    ["opened", "reopened"],
    async context => {
      const {repository} = await context.graphqlClient.request(
        IssueTemplateDocument,
        {
          number: context.issue.number,
          owner: context.repo.owner,
          repo: context.repo.repo,
        },
      );
      return (
        <Issue
          actor={context.actor}
          action={context.payload.action}
          issue={repository?.issue}
          repo={repository}
          owner={repository?.owner}
        />
      );
    },
  ],
];
