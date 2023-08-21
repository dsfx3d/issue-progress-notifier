import {ReaderTaskEither} from "fp-ts/lib/ReaderTaskEither";
import {TStage} from "./TStage";
import {tryCatchK} from "fp-ts/lib/TaskEither";

export function applyStage<TInput>(
  stage: TStage<TInput>,
): ReaderTaskEither<TInput, Error, TInput> {
  return tryCatchK(stage, error => error as Error);
}
