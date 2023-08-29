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
    <table
      {...{
        width: "100%",
        cellpadding: "0",
        cellspacing: "0",
        class: "border-b-2 pb-4 font-sans",
      }}
    >
      <tr>
        <td colspan="2">
          <div class="text-3xl font-medium pb-2">
            {title}
            <span class="text-gray-500 text-2xl font-light">#{number}</span>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="pb-4">
            <span class="badge badge-success py-2 font-semibold lowercase">
              {state}
            </span>
            <b class="font-medium">{author?.login}</b> opened this issue at{" "}
            {new Date(createdAt)}
          </div>
        </td>
      </tr>
    </table>
  );
}
