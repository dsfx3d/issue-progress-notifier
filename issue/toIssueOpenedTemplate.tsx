// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import {IssueHeadFragment, IssueOpenedQuery} from "$lib/graphql";
import {toIssueHeadTemplate} from "./toIssueHeadTemplate";

export function toIssueOpenedTemplate({repository}: IssueOpenedQuery): string {
  return (
    <table>
      <tr>
        <td>
          {toIssueHeadTemplate(
            repository?.issue as unknown as IssueHeadFragment,
          )}
        </td>
      </tr>
      <tr>
        <td>{repository?.issue?.bodyHTML}</td>
      </tr>
    </table>
  );
}
