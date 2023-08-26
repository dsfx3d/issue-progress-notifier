import {minify} from "html-minifier-terser";
import {toPurgeCss} from "./toPurgeCss";
import generateGitHubCss from "generate-github-markdown-css";

export async function toHtml(body: string): Promise<string> {
  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>${await toPurgeCss({
        html: body,
        css: await generateGitHubCss(),
      })}</style>
    </head>
    <body>${body}</body>
    </html>`;
  return minify(html, {minifyCSS: true});
}
