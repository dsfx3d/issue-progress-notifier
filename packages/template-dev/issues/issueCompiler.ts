import {GetIssueQuery} from "@ipn/issues-gql";
import {Issue} from "@ipn/templates";
import {createCompileTask} from "@issue-notifier/template-compiler";

export const issueCompiler = (issue: GetIssueQuery) =>
  createCompileTask({
    plugins: [],
  })(Issue(issue));
