// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import {Actor, Issue, Repository, RepositoryOwner} from "$lib/graphql";
import {IssueTitle} from "./IssueTitle";
import {RepoAvatar} from "./RepoAvatar";
import {StateAuthor} from "./StateAuthor";

export type Props = {
  issue?: Pick<Issue, "state" | "bodyHTML" | "number" | "title"> | null;
  repo?: Pick<Repository, "nameWithOwner"> | null;
  author?: Pick<Actor, "login" | "url"> | null;
  owner?: Pick<RepositoryOwner, "avatarUrl">;
};

export function Issue({author, issue, owner, repo}: Props): string {
  return (
    <div class="font-sans py-8 px-6">
      <RepoAvatar
        avatarUrl={owner?.avatarUrl}
        nameWithOwner={repo?.nameWithOwner}
      />
      <IssueTitle issue={issue} />
      <StateAuthor author={author} state={issue?.state} />
      <hr class="mt-2 mb-4" />
      {issue?.bodyHTML}
    </div>
  );
}
