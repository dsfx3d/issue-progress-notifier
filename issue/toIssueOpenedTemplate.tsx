// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import {IssueOpenedQuery} from "$lib/graphql";

export function toIssueOpenedTemplate({repository}: IssueOpenedQuery): string {
  return (
    <div class="bg-slate-100 px-28 py-14 font-sans">
      <table
        {...{
          width: "100%",
          cellpadding: "0",
          cellspacing: "0",
          class: "py-4 px-6 bg-white rounded border border-gray-300",
        }}
      >
        <tr>
          <td class="border-b-2 border-black">
            <div class="text-sm font-thin font-mono">
              {repository?.nameWithOwner}
            </div>
            <div class="text-3xl font-medium pb-2">
              {repository?.issue?.title}
              <span class="text-gray-500 text-2xl font-light">
                #{repository?.issue?.number}
              </span>
            </div>
            <div>
              <span class="badge badge-success font-semibold lowercase">
                {repository?.issue?.state}
              </span>
              <b class="font-medium">{repository?.issue?.author?.login}</b>{" "}
              opened this issue &bull; {repository?.issue?.comments.totalCount}{" "}
              comments
            </div>
          </td>
        </tr>
      </table>
      <table
        {...{
          width: "100%",
          cellpadding: "0",
          cellspacing: "0",
          class: "mt-4 py-2 px-6 bg-white rounded border border-gray-300",
        }}
      >
        <tr>
          <td>{repository?.issue?.bodyHTML}</td>
        </tr>
      </table>
    </div>
  );
}
