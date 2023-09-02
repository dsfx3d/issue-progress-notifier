import {Context} from "./Context";
import {EventNotSupported} from "./EventNotSupported";
import {ReaderTask} from "fp-ts/lib/ReaderTask";
import {TCompilerResult} from "./TCompilerResult";
import {
  flatMap,
  fromPredicate,
  map,
  matchE,
  tryCatchK,
} from "fp-ts/lib/TaskEither";
import {flow, identity} from "fp-ts/lib/function";
import {of} from "fp-ts/lib/Task";
import {templateResolvers} from "./templateResolvers";
import {toHtml} from "../html-compiler/toHtml";
import css from "$lib/styles.css";

export const toTemplateCompiler: ReaderTask<Context, TCompilerResult> = flow(
  fromPredicate(
    context => context.eventAction in templateResolvers,
    ({eventAction}) => new EventNotSupported(eventAction),
  ),
  flatMap(
    tryCatchK(
      context => templateResolvers[context.eventAction](context),
      identity,
    ),
  ),
  map(body => ({body, css})),
  flatMap(tryCatchK(toHtml, identity)),
  matchE<unknown, string, TCompilerResult>(
    reason =>
      of({
        failed: true,
        reason,
      }),
    template =>
      of({
        failed: false,
        template,
      }),
  ),
);
