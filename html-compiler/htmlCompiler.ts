import {appendTag} from "./appendTag";
import {createLazyPipe} from "../utils/createLazyPipe";
import {minify} from "html-minifier-terser";
import {purgeCss} from "./purgeCss";
import {wrapHtmlDocument} from "./wrapHtmlDocument";
import generateGitHubCss from "generate-github-markdown-css";

export const htmlCompiler = createLazyPipe<string>(
  wrapHtmlDocument,
  appendTag({
    getParent: document => document.querySelector("head"),
    toElement: async document => {
      const style = document.createElement("style");
      style.innerHTML = await purgeCss({
        html: document.body.innerHTML,
        css: await generateGitHubCss(),
      });
      return style;
    },
  }),
  async html => minify(html, {minifyCSS: true}),
);
