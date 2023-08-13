import {ReaderTaskEither} from "fp-ts/lib/ReaderTaskEither";
import {TCompilerInput} from "./TCompilerInput";
import {TPlugin} from "./TPlugin";
import {tryCatchK} from "fp-ts/lib/TaskEither";

export function applyPlugin<TInput extends TCompilerInput>(
  plugin: TPlugin<TInput>,
): ReaderTaskEither<TInput, Error, TInput> {
  return tryCatchK(plugin, error => error as Error);
}
