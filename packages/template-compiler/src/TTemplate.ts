import {type CompileOptions} from "./CompileOptions";
import {type Reader} from "fp-ts/lib/Reader";

export type TTemplate = Reader<CompileOptions, string>;
