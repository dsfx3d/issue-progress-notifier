import {type CompileOptions} from "./CompileOptions";
import {CompilerResult} from "./CompilerResult";
import {type TCompiler} from "./TCompiler";
import {TCompilerTask} from "./TCompilerTask";
import {flow} from "fp-ts/lib/function";
import {map, matchE} from "fp-ts/lib/TaskEither";
import {of} from "fp-ts/lib/Task";
import {purgeCss} from "./purgeCss";
import {toCompileOptions} from "./toCompileOptions";

export function toTemplateCompiler<TProps>(
  toHtml: TCompiler<CompileOptions>,
  toBody: TCompiler<TProps>,
  css: string,
): TCompilerTask<TProps> {
  return flow(
    toBody,
    toCompileOptions({css}),
    purgeCss,
    map(toHtml),
    matchE<Error, string, CompilerResult>(
      error =>
        of({
          error: true,
          message: error.message,
        }),
      html =>
        of({
          error: false,
          result: html,
        }),
    ),
  );
}
