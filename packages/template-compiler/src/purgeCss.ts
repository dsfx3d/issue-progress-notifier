import {CompileOptions} from "./CompileOptions";
import {PurgeCSS} from "purgecss";
import {Task} from "fp-ts/lib/Task";

export function purgeCss(options: CompileOptions): Task<CompileOptions> {
  return async () => {
    const [{css}] = await new PurgeCSS().purge({
      content: [{raw: options.body, extension: "html"}],
      css: [{raw: options.css}],
    });
    return {
      ...options,
      css,
    };
  };
}
