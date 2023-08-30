// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import juice from "juice";

export function toHtml({body, css}: {body: string; css: string}): string {
  const html = (
    <main>
      <style>{css}</style>
      <section>{body}</section>
    </main>
  );
  return juice(html, {
    removeStyleTags: true,
    preserveKeyFrames: false,
  });
}
