import {Reader} from "fp-ts/lib/Reader";

export type TStage<TInput> = Reader<TInput, Promise<TInput>>;
