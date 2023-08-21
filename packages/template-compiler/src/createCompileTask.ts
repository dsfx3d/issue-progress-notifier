import {CompileOptions} from "./CompileOptions";
import {ReaderTaskEither} from "fp-ts/lib/ReaderTaskEither";
import {TCompilerInput} from "./TCompilerInput";
import {applyPlugins} from "./applyPlugins";
import {flow} from "fp-ts/lib/function";

export function createCompileTask<TInput extends TCompilerInput>(
  compileOptions: CompileOptions<TInput>,
): ReaderTaskEither<TInput, Error, TInput> {
  return flow(applyPlugins(compileOptions.plugins));
}
