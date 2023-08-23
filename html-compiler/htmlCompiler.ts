import {appendTag} from "./appendTag";
import {createLazyPipe} from "@issue-notifier/lazypipe";
import {minify, wrapHtmlDocument} from "@issue-notifier/html-compiler";
import {purgeCss} from "./purgeCss";
import generateGitHubCss from "generate-github-markdown-css";

export const htmlCompiler = createLazyPipe(
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
  minify({
    minifyCSS: true,
  }),
);
