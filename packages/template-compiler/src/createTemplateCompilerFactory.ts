import {type CompileOptions} from "./CompileOptions";
import {type Reader} from "fp-ts/Reader";
import {type TTemplateCompilerFactory} from "./TTemplateCompilerFactory";
import {type Task, map} from "fp-ts/Task";
import {pipe} from "fp-ts/function";

export function createTemplateCompilerFactory<T>(
  toHtml: Reader<CompileOptions, string>,
  toCss: Task<string>,
): TTemplateCompilerFactory<T> {
  return toBody => props =>
    pipe(
      toCss,
      map(css => ({body: toBody(props), css})),
      map(toHtml),
    );
}
