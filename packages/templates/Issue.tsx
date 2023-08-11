// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import {GetIssueQuery} from "@ipn/issues-gql";

export function Issue({repository}: GetIssueQuery): string {
  return (
    <div>
      <h1>Issue</h1>
      <p>{repository?.issue?.author?.login}</p>
      <div>{repository?.issue?.bodyHTML}</div>
    </div>
  );
}
