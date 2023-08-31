import {Context} from "./Context";
import {EventAction} from "./EventAction";
import {Reader} from "fp-ts/lib/Reader";
import {emailRegex} from "../utils/emailRegex";
import {uniqueMatchAll} from "../utils/uniqueMatchAll";

export const subscriptionResolvers: Record<
  EventAction,
  Reader<Context, string[]>
> = {
  [EventAction.IssueOpened]: context =>
    uniqueMatchAll(emailRegex, `${context.payload.issue?.body}`),
};
