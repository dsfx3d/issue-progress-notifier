// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import {IssueOpenedQuery} from "$lib/graphql";
import {toIssueHeadTemplate} from "./toIssueHeadTemplate";

export function toIssueOpenedTemplate({repository}: IssueOpenedQuery): string {
  return (
    <div>
      {toIssueHeadTemplate(
        repository!.issue![" $fragmentRefs"]!.IssueHeadFragment!,
      )}
      <div>{repository?.issue?.bodyHTML}</div>
    </div>
  );
}
