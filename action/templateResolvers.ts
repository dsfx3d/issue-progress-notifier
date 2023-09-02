import {Context} from "./Context";
import {EventAction} from "./EventAction";
import {IssueOpenedDocument} from "$lib/graphql";
import {Reader} from "fp-ts/lib/Reader";
import {toIssueOpenedTemplate} from "../issue/toIssueOpenedTemplate";

export const templateResolvers: Record<
  EventAction,
  Reader<Context, Promise<string>>
> = {
  [EventAction.IssueOpened]: async context => {
    const data = await context.graphqlClient.request(IssueOpenedDocument, {
      number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
    });
    return toIssueOpenedTemplate(data);
  },
};
