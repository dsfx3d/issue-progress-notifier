import {type Options, minify as minifyHtml} from "html-minifier-terser";
import {type TStage} from "@issue-notifier/lazypipe";

export function minify(options: Options): TStage<string> {
  return async html => minifyHtml(html, options);
}
