import {JSDOM} from "jsdom";
import {type TStage} from "@issue-notifier/lazypipe";
import {getOrCreateHead} from "./getOrCreateHead";

export function insertInternalStyleTag(
  getCss: () => Promise<string>,
): TStage<string> {
  return async html => {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const head = getOrCreateHead(document);
    const style = document.createElement("style");
    style.textContent = await getCss();
    head.append(style);
    return dom.serialize();
  };
}
