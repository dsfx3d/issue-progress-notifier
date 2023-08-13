import {JSDOM} from "jsdom";
import {type TPlugin} from "@issue-notifier/template-compiler";
import {getOrCreateHead} from "./getOrCreateHead";

export function insertStyles(css: string): TPlugin<string> {
  return async html => {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const head = getOrCreateHead(document);
    const style = document.createElement("style");
    style.textContent = css;
    head.appendChild(style);
    return dom.serialize();
  };
}
