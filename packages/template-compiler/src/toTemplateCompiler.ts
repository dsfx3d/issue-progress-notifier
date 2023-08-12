import {type CompileOptions} from "./CompileOptions";
import {type TCompiler} from "./TCompiler";
import {flow} from "fp-ts/lib/function";

export function toTemplateCompiler<TProps>(
  toHtml: TCompiler<CompileOptions>,
  toBody: TCompiler<TProps>,
  css: string,
): TCompiler<TProps> {
  return flow(toBody, body => toHtml({body, css}));
}
