import {dirname, resolve} from "node:path";
import {fileURLToPath} from "node:url";

export const outputDir = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "../lib",
);
