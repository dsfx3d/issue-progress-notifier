import {Context} from "../action/Context";
import {ReaderTask} from "fp-ts/lib/ReaderTask";
import {TCompilerResult} from "./TCompilerResult";
import {flatMap, map, matchE, tryCatchK} from "fp-ts/lib/TaskEither";
import {flow, identity} from "fp-ts/lib/function";
import {of} from "fp-ts/lib/Task";
import {resolveTemplate} from "./resolveTemplate";
import {toHtml} from "../html-compiler/toHtml";
import css from "$lib/styles.css";

export const toTemplateCompiler: ReaderTask<Context, TCompilerResult> = flow(
  tryCatchK(resolveTemplate, identity),
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
