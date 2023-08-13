import {PurgeCSS} from "purgecss";
import {ReaderTaskEither} from "fp-ts/lib/ReaderTaskEither";
import {TPurgeRequest} from "./TPurgeRequest";
import {flow} from "fp-ts/lib/function";
import {map, tryCatchK} from "fp-ts/lib/TaskEither";

export const purgeCss: ReaderTaskEither<TPurgeRequest, Error, string> = flow(
  tryCatchK(
    ({html, css}) =>
      new PurgeCSS().purge({
        content: [
          {
            raw: html,
            extension: "html",
          },
        ],
        css: [
          {
            raw: css,
          },
        ],
      }),
    e => e as Error,
  ),
  map(([{css}]) => css),
);
