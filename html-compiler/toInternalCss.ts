import {JSDOM} from "jsdom";

export function toInternalCss(html: string): string {
  const document = new JSDOM(html).window.document;
  return [...document.querySelectorAll("style")]
    .map(tag => tag.innerHTML)
    .join(";");
}
