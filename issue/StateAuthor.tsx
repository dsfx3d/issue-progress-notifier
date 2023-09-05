// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import {StateBadge, Props as StateBadgeProps} from "./StateBadge";

type Props = StateBadgeProps & {
  action?: string;
  actor?: string;
  state?: string;
};

export function StateAuthor({action, actor, state}: Props): string {
  return (
    <div>
      <StateBadge state={state} />
      <span class="font-semibold ml-2">{actor}</span> {action} this issue
    </div>
  );
}
