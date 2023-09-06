// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import {Issue} from "$lib/graphql";

export type IssueTitleProps = {
  issue?: Pick<Issue, "title" | "number"> | null;
};

export function IssueTitle({issue}: IssueTitleProps): string {
  return (
    <div class="text-3xl font-medium my-2">
      {issue?.title}
      <span class="text-gray-500 -text-2xl font-light">#{issue?.number}</span>
    </div>
  );
}
