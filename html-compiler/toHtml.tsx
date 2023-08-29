// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import juice from "juice";

export function toHtml({body, css}: {body: string; css: string}): string {
  const html = (
    <html lang="en">
      <head>
        <meta charset="utf8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <style>{css} </style>
      </head>
      <body>{body}</body>
    </html>
  );
  return juice(html, {
    removeStyleTags: true,
  });
}
