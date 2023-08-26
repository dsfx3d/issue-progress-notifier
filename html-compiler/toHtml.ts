import {minify} from "html-minifier-terser";
import {purgeCss} from "./purgeCss";
import css from "../lib/github.css";

export async function toHtml(body: string): Promise<string> {
  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>${await purgeCss({
        html: body,
        css,
      })}</style>
    </head>
    <body>${body}</body>
    </html>`;
  return minify(html, {minifyCSS: true});
}
