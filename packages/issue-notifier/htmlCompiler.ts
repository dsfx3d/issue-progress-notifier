import {createCompileTask} from "@issue-notifier/template-compiler";
import {githubMarkdownCss} from "./githubMarkdownCss";
import {
  insertInternalStyleTag,
  minify,
  purgeInternalCss,
  wrapHtmlDocument,
} from "@issue-notifier/template-compiler-plugin-html";

export const htmlCompiler = createCompileTask({
  plugins: [
    wrapHtmlDocument,
    insertInternalStyleTag(githubMarkdownCss),
    purgeInternalCss,
    minify({
      minifyCSS: true,
    }),
  ],
});
