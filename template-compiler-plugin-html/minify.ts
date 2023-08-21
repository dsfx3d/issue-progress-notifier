import {type Options, minify as minifyHtml} from "html-minifier-terser";
import {TPlugin} from "@issue-notifier/template-compiler";

export function minify(options: Options): TPlugin<string> {
  return async html => minifyHtml(html, options);
}
