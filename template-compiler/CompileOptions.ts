import {TCompilerInput} from "./TCompilerInput";
import {TPlugin} from "./TPlugin";

export type CompileOptions<TInput extends TCompilerInput = TCompilerInput> = {
  plugins: TPlugin<TInput>[];
};
