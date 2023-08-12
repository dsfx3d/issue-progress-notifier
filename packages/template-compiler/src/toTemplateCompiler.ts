import {type CompileOptions} from "./CompileOptions";
import {type TCompiler} from "./TCompiler";
import {TCompilerTask} from "./TCompilerTask";
import {flow} from "fp-ts/lib/function";
import {map} from "fp-ts/lib/Task";
import {purgeCss} from "./purgeCss";
import {toCompileOptions} from "./toCompileOptions";

export function toTemplateCompiler<TProps>(
  toHtml: TCompiler<CompileOptions>,
  toBody: TCompiler<TProps>,
  css: string,
): TCompilerTask<TProps> {
  return flow(toBody, toCompileOptions({css}), purgeCss, map(toHtml));
}
