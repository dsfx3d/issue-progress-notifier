import {readFile} from "node:fs/promises";
import {resolve} from "node:path";

export function getGitHubCss(): Promise<string> {
  return readFile(
    resolve(
      // eslint-disable-next-line unicorn/prefer-module
      __dirname,
      "../lib/github.css",
    ),
    "utf8",
  );
}
