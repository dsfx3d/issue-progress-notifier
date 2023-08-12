import {type CompileOptions} from "./CompileOptions";
import {PurgeCSS} from "purgecss";

export async function toPurgedCss(options: CompileOptions): Promise<string> {
  const [{css}] = await new PurgeCSS().purge({
    content: [{raw: options.body, extension: "html"}],
    css: [{raw: options.css}],
  });
  return css;
}
