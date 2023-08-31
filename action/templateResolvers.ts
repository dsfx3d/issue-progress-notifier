import {EventAction} from "./EventAction";
import {IssueOpenedQuery} from "$lib/graphql";
import {Reader} from "fp-ts/lib/Reader";
import {toIssueOpenedTemplate} from "../issue/toIssueOpenedTemplate";

export const templateResolvers: Record<EventAction, Reader<any, string>> = {
  [EventAction.IssueOpened]: (data: IssueOpenedQuery) =>
    toIssueOpenedTemplate(data),
};
