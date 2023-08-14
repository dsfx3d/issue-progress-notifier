import {JSDOM} from "jsdom";
import {TPlugin} from "@issue-notifier/template-compiler";
import {insertInternalStyleTag} from "./insertInternalStyleTag";
import {purgeCss} from "@issue-notifier/purgecss";
import {removeAll} from "./removeAll";
import {toInternalCss} from "./toInternalCss";

export const purgeInternalCss: TPlugin<string> = async html => {
  const purgedCss = await purgeCss({
    html: new JSDOM(html).window.document.body.innerHTML,
    css: toInternalCss(html),
  });
  const unstyledHtml = removeAll("style")(html);
  return insertInternalStyleTag(purgedCss)(unstyledHtml);
};
