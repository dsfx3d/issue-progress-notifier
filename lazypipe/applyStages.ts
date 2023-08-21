import {ReaderTaskEither} from "fp-ts/lib/ReaderTaskEither";
import {TStage} from "./TStage";
import {applyStage} from "./applyStage";
import {flatMap, of} from "fp-ts/lib/TaskEither";
import {pipe} from "fp-ts/lib/function";

export function applyStages<TInput>(
  plugins: TStage<TInput>[],
): ReaderTaskEither<TInput, Error, TInput> {
  return input =>
    plugins
      .map(plugin => flatMap(applyStage(plugin)))
      // eslint-disable-next-line unicorn/no-array-reduce
      .reduce((acc, plugin) => pipe(acc, plugin), of<Error, TInput>(input));
}
