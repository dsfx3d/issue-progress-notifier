import {THtmlOptions} from "./THtmlOptions";
import {inlineCss} from "./inlineCss";
import {wrapHtmlDocument} from "./wrapHtmlDocument";
import posthtml from "posthtml";
import removeAttributes from "posthtml-remove-attributes";

export async function toHtml({body, css}: THtmlOptions): Promise<string> {
  const content = inlineCss({body, css});
  const html = wrapHtmlDocument(content);
  const result = await posthtml()
    .use(removeAttributes(["class"]))
    .process(html);
  return result.html;
}
