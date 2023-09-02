import {THtmlOptions} from "./THtmlOptions";
import juice from "juice";

export function inlineCss({body, css}: THtmlOptions): string {
  juice.excludedProperties = ["--tw-shadow"];
  return juice.inlineContent(body, css, {
    removeStyleTags: false,
    applyAttributesTableElements: true,
  });
}
