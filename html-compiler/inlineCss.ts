import juice from "juice";

export function inlineCss(html: string): string {
  juice.excludedProperties = ["--tw-shadow"];
  return juice(html, {
    removeStyleTags: false,
    preserveMediaQueries: true,
    applyAttributesTableElements: true,
  });
}
