import {CompileOptions} from "./CompileOptions";
import {Reader} from "fp-ts/lib/Reader";

export function toCompileOptions(
  options: Omit<CompileOptions, "body">,
): Reader<string, CompileOptions> {
  return body => ({
    ...options,
    body,
  });
}
