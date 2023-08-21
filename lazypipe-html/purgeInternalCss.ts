import {JSDOM} from "jsdom";
import {type TStage} from "@issue-notifier/lazypipe";
import {insertInternalStyleTag} from "./insertInternalStyleTag";
import {purgeCss} from "./purgeCss";
import {removeAll} from "./removeAll";
import {toInternalCss} from "./toInternalCss";

export const purgeInternalCss: TStage<string> = async html => {
  const purgedCss = await purgeCss({
    html: new JSDOM(html).window.document.body.innerHTML,
    css: toInternalCss(html),
  });
  const unstyledHtml = removeAll("style")(html);
  return insertInternalStyleTag(purgedCss)(unstyledHtml);
};
