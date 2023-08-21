import {createLazyPipe} from "@issue-notifier/lazypipe";
import {githubMarkdownCss} from "./githubMarkdownCss";
import {
  insertInternalStyleTag,
  minify,
  purgeInternalCss,
  wrapHtmlDocument,
} from "@issue-notifier/lazypipe-html";

export const htmlCompiler = createLazyPipe(
  wrapHtmlDocument,
  insertInternalStyleTag(githubMarkdownCss),
  purgeInternalCss,
  minify({
    minifyCSS: true,
  }),
);
