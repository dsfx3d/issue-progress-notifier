// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import {IssueHeadFragment} from "../lib/graphql";

export function toIssueHeadTemplate({
  title,
  number,
  state,
  author,
  createdAt,
}: IssueHeadFragment): string {
  return (
    <div class="flex flex-col gap-2 font-sans border-b-2 pb-4">
      <h1 class="text-3xl font-medium">
        {title}
        <span class="text-gray-500 text-2xl font-light">#{number}</span>
      </h1>
      <div class="flex gap-2 content-center items-center">
        <span class="badge badge-success py-4 font-semibold lowercase">
          {state}
        </span>
        <span class="text-sm">
          <b class="font-medium">{author?.login}</b> opened this issue at{" "}
          {new Date(createdAt)}
        </span>
      </div>
    </div>
  );
}
