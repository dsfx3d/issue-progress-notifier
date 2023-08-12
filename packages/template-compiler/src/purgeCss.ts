import {type CompileOptions} from "./CompileOptions";
import {type ReaderTaskEither} from "fp-ts/lib/ReaderTaskEither";
import {map, tryCatchK} from "fp-ts/lib/TaskEither";
import {pipe} from "fp-ts/lib/function";
import {toPurgedCss} from "./toPurgedCss";

export const purgeCss: ReaderTaskEither<
  CompileOptions,
  Error,
  CompileOptions
> = options =>
  pipe(
    options,
    tryCatchK(toPurgedCss, error => error as Error),
    map(css => ({...options, css})),
  );
