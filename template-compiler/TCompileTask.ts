import {type CompilerResult} from "./CompilerResult";
import {type ReaderTask} from "fp-ts/lib/ReaderTask";
import {TCompilerInput} from "./TCompilerInput";

export type TCompileTask<TInput extends TCompilerInput> = ReaderTask<
  TInput,
  CompilerResult
>;
