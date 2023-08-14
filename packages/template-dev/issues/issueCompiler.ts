import {GetIssueQuery} from "@ipn/issues-gql";
import {Issue} from "@ipn/templates";
import {createCompileTask} from "@issue-notifier/template-compiler";
import {githubMarkdownCss} from "./githubMarkdownCss";
import {
  insertInternalStyleTag,
  minify,
  purgeInternalCss,
  wrapHtmlDocument,
} from "@issue-notifier/template-compiler-plugin-html";

export const issueCompiler = (issue: GetIssueQuery) =>
  createCompileTask({
    plugins: [
      wrapHtmlDocument,
      insertInternalStyleTag(githubMarkdownCss),
      purgeInternalCss,
      minify({
        minifyCSS: true,
      }),
    ],
  })(Issue(issue));
