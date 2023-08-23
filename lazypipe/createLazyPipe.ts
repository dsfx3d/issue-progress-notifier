import {ReaderTaskEither} from "fp-ts/lib/ReaderTaskEither";
import {TStage} from "./TStage";
import {flatMap, of, tryCatchK} from "fp-ts/lib/TaskEither";
import {identity, pipe} from "fp-ts/function";

export function createLazyPipe<TInput>(
  ...stages: TStage<TInput>[]
): ReaderTaskEither<TInput, unknown, TInput> {
  return input =>
    stages
      .map(stage => flatMap(tryCatchK(stage, identity)))
      // eslint-disable-next-line unicorn/no-array-reduce
      .reduce((acc, stage) => pipe(acc, stage), of<unknown, TInput>(input));
}
