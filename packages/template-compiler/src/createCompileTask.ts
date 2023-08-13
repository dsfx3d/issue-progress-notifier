import {CompileOptions} from "./CompileOptions";
import {CompilerResult} from "./CompilerResult";
import {TCompileTask} from "./TCompileTask";
import {TCompilerInput} from "./TCompilerInput";
import {applyPlugins} from "./applyPlugins";
import {flow} from "fp-ts/lib/function";
import {matchE} from "fp-ts/TaskEither";
import {of} from "fp-ts/lib/Task";

export function createCompileTask<TInput extends TCompilerInput>(
  compileOptions: CompileOptions<TInput>,
): TCompileTask<TInput> {
  return flow(
    applyPlugins(compileOptions.plugins),
    matchE<Error, TInput, CompilerResult>(
      error => of({error: true, message: error.message}),
      result => of({error: false, result}),
    ),
  );
}
