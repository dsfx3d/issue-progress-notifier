import {Reader} from "fp-ts/lib/Reader";

export type TCompiler<TProp> = Reader<TProp, string>;
