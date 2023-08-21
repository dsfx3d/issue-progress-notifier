import {PurgeCSS} from "purgecss";
import {TPurgeRequest} from "./TPurgeRequest";

export async function purgeCss(request: TPurgeRequest): Promise<string> {
  const [{css}] = await new PurgeCSS().purge({
    content: [
      {
        raw: request.html,
        extension: "html",
      },
    ],
    css: [
      {
        raw: request.css,
      },
    ],
  });
  return css;
}
