import {EventAction} from "./EventAction";
import {IssueOpenedQuery} from "$lib/graphql";
import {Reader} from "fp-ts/lib/Reader";

export const subjectResolvers: Record<EventAction, Reader<any, string>> = {
  [EventAction.IssueOpened]: (data: IssueOpenedQuery) =>
    `${data.repository?.issue?.title}`,
};
