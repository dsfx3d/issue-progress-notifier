import juice from "juice";

export function inlineCss({html, css}: {html: string; css: string}): string {
  juice.excludedProperties = ["--tw-shadow"];

  html = juice.inlineContent(html, css, {
    removeStyleTags: false,
    applyAttributesTableElements: true,
  });

  return html;
}
