import {TCompiler} from "./TCompiler";
import {css} from "./css";
import {toHtml} from "./toHtml";
import {toTemplateCompiler} from "./toTemplateCompiler";

export function toCompilerOf<TProp>(
  toBody: TCompiler<TProp>,
): TCompiler<TProp> {
  return toTemplateCompiler<TProp>(toHtml, toBody, css);
}
