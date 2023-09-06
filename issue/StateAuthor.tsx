// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import {StateBadge, StateBadgeProps} from "./StateBadge";

export type StateAuthorProps = StateBadgeProps & {
  action?: string;
  actor?: string;
  state?: string;
};

export function StateAuthor({action, actor, state}: StateAuthorProps): string {
  return (
    <div>
      <StateBadge state={state} />
      <span class="font-semibold ml-2">{actor}</span> {action} this issue
    </div>
  );
}
