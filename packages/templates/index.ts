import {readFile} from "fs/promises";
import {resolve} from "path";

type Template = "issue";

function toResolvedPath(template: Template): string {
  return resolve(__dirname, `${template}.ejs`);
}

export function getTemplate(template: Template): Promise<string> {
  const resolvedPath = toResolvedPath(template);
  return readFile(resolvedPath, "utf-8");
}
