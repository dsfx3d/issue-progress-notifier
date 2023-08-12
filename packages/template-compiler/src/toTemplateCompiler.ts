import {type CompileOptions} from "./CompileOptions";
import {type TCompiler} from "./TCompiler";
import {TCompilerTask} from "./TCompilerTask";
import {flow} from "fp-ts/lib/function";
import {of} from "fp-ts/lib/Task";
import {toCompileOptions} from "./toCompileOptions";

export function toTemplateCompiler<TProps>(
  toHtml: TCompiler<CompileOptions>,
  toBody: TCompiler<TProps>,
  css: string,
): TCompilerTask<TProps> {
  return flow(toBody, toCompileOptions({css}), toHtml, of);
}
