// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import {Actor} from "$lib/graphql";
import {StateBadge, Props as StateBadgeProps} from "./StateBadge";

type Props = StateBadgeProps & {
  author?: Pick<Actor, "login" | "url"> | null;
  state?: string;
};

export function StateAuthor({state, author}: Props): string {
  return (
    <div>
      <StateBadge state={state} />
      <a
        href={author?.url}
        target="_blank"
        class="font-semibold text-inherit ml-2"
      >
        {author?.login}
      </a>{" "}
      created this issue
    </div>
  );
}
