import {type CompilerResult} from "./CompilerResult";
import {type ReaderTask} from "fp-ts/lib/ReaderTask";

export type TCompilerTask<TProp> = ReaderTask<TProp, CompilerResult>;
