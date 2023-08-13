import {ReaderTaskEither} from "fp-ts/lib/ReaderTaskEither";
import {TCompilerInput} from "./TCompilerInput";
import {TPlugin} from "./TPlugin";
import {applyPlugin} from "./applyPlugin";
import {flatMap, of} from "fp-ts/lib/TaskEither";
import {pipe} from "fp-ts/lib/function";

export function applyPlugins<TInput extends TCompilerInput>(
  plugins: TPlugin<TInput>[],
): ReaderTaskEither<TInput, Error, TInput> {
  return input =>
    plugins
      .map(plugin => flatMap(applyPlugin(plugin)))
      .reduce((acc, plugin) => pipe(acc, plugin), of<Error, TInput>(input));
}
