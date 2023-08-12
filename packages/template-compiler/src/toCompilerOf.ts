import {TCompiler} from "./TCompiler";
import {TCompilerTask} from "./TCompilerTask";
import {css} from "./css";
import {toHtml} from "./toHtml";
import {toTemplateCompiler} from "./toTemplateCompiler";

export function toCompilerOf<TProp>(
  toBody: TCompiler<TProp>,
): TCompilerTask<TProp> {
  return toTemplateCompiler<TProp>(toHtml, toBody, css);
}
