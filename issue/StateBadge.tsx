// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from "typed-html";
import {State} from "./State";

export type StateBadgeProps = {
  state?: string;
};

export function StateBadge({state}: StateBadgeProps): string {
  const badgeColor: Record<State, string> = {
    OPEN: "badge-success",
    CLOSED: "badge-accent",
  };

  return (
    <span
      class={`badge ${
        badgeColor[(state as State) ?? "OPEN"]
      } font-semibold capitalize`}
    >
      {state}
    </span>
  );
}
