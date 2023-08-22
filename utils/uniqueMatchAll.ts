import {chain} from "lodash";

export const uniqueMatchAll: (regex: RegExp, text: string) => string[] = (
  regex,
  text,
) =>
  chain([...text.matchAll(regex)])
    .flatten()
    .uniq()
    .value();
