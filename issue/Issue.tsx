// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import {Issue, Repository, RepositoryOwner} from "$lib/graphql";
import {IssueTitle} from "./IssueTitle";
import {RepoAvatar} from "./RepoAvatar";
import {StateAuthor} from "./StateAuthor";

export type IssueProps = {
  action?: string;
  actor: string;
  issue?: Pick<Issue, "state" | "bodyHTML" | "number" | "title"> | null;
  repo?: Pick<Repository, "nameWithOwner"> | null;
  owner?: Pick<RepositoryOwner, "avatarUrl">;
};

export function Issue({action, actor, issue, owner, repo}: IssueProps): string {
  return (
    <div class="font-sans py-4 px-6">
      <RepoAvatar
        avatarUrl={owner?.avatarUrl}
        nameWithOwner={repo?.nameWithOwner}
      />
      <IssueTitle issue={issue} />
      <StateAuthor action={action} actor={actor} state={issue?.state} />
      <hr class="mt-2 mb-4" />
      {issue?.bodyHTML}
    </div>
  );
}
