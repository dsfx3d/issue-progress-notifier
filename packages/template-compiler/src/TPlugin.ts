import {TCompilerInput} from "./TCompilerInput";

export type TPlugin<TInput extends TCompilerInput> = (
  input: TInput,
) => Promise<TInput>;
