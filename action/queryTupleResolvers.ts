import {Context} from "./Context";
import {EventAction} from "./EventAction";
import {IssueOpenedDocument} from "$lib/graphql";
import {Reader} from "fp-ts/lib/Reader";
import {TQueryTuple} from "./TQueryTuple";
import {toQueryTuple} from "./toQueryTuple";

export const queryTupleResolvers: Record<
  EventAction,
  Reader<Context, TQueryTuple>
> = {
  [EventAction.IssueOpened]: context =>
    toQueryTuple(IssueOpenedDocument, {
      owner: context.repo.owner,
      name: context.repo.repo,
      issue: context.issue.number,
    }),
};
