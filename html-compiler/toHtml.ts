import {THtmlOptions} from "./THtmlOptions";
import {inlineCss} from "./inlineCss";
import {wrapHtmlDocument} from "./wrapHtmlDocument";
import posthtml from "posthtml";
import removeAttributes from "posthtml-remove-attributes";

export async function toHtml(options: THtmlOptions): Promise<string> {
  const html = inlineCss(wrapHtmlDocument(options));
  const result = await posthtml()
    .use(removeAttributes(["class"]))
    .process(html);
  return result.html;
}
