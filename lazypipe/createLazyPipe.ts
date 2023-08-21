import {ReaderTaskEither} from "fp-ts/lib/ReaderTaskEither";
import {TStage} from "./TStage";
import {applyStages} from "./applyStages";
import {flow} from "fp-ts/lib/function";

export function createLazyPipe<TInput>(
  ...stages: TStage<TInput>[]
): ReaderTaskEither<TInput, Error, TInput> {
  return flow(applyStages(stages));
}
