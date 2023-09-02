import {TCompilerOptions} from "./TCompilerOptions";
import juice from "juice";

export function inlineCss({body, css}: TCompilerOptions): string {
  juice.excludedProperties = ["--tw-shadow"];
  return juice.inlineContent(body, css, {
    removeStyleTags: false,
    applyAttributesTableElements: true,
  });
}
