// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";

export type RepoAvatarProps = {
  avatarUrl?: string;
  nameWithOwner?: string;
};

export function RepoAvatar({
  avatarUrl,
  nameWithOwner,
}: RepoAvatarProps): string {
  return (
    <div class="avatar">
      <div class="w-5 rounded-full mr-2">
        <img src={avatarUrl} />
      </div>
      <span class="text-sm font-thin font-mono">{nameWithOwner}</span>
    </div>
  );
}
