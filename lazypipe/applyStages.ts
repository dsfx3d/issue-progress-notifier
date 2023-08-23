import {ReaderTaskEither} from "fp-ts/lib/ReaderTaskEither";
import {TStage} from "./TStage";
import {flatMap, of, tryCatchK} from "fp-ts/lib/TaskEither";
import {pipe} from "fp-ts/lib/function";

export function applyStages<TInput>(
  stage: TStage<TInput>[],
): ReaderTaskEither<TInput, Error, TInput> {
  return input =>
    stage
      .map(stage => flatMap(tryCatchK(stage, error => error as Error)))
      // eslint-disable-next-line unicorn/no-array-reduce
      .reduce((acc, stage) => pipe(acc, stage), of<Error, TInput>(input));
}
