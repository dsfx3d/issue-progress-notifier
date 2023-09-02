import {toHtml} from "../html-compiler/toHtml";

export function renderHtml(
  document: Document,
  {css, html}: {html: string; css: string},
): HTMLElement {
  const root = document.createElement("div");
  toHtml({
    body: html,
    css,
  }).then(html => {
    root.innerHTML = html;
  });
  return root;
}
