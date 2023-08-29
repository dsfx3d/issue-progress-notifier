import {minify} from "html-minifier-terser";
import {toPurgedCss} from "./toPurgedCss";
import juice from "juice";

export async function toHtml({
  body,
  css,
}: {
  body: string;
  css: string;
}): Promise<string> {
  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>${await toPurgedCss({
        css,
        html: body,
      })}</style>
    </head>
    <body>${body}</body>
    </html>`;
  return minify(juice(html), {minifyCSS: true});
}
