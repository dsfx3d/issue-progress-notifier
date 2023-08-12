import {CompileOptions} from "./CompileOptions";
import {TCompiler} from "./TCompiler";
import {compile} from "ejs";
import {flow} from "fp-ts/lib/function";

export const toHtml: TCompiler<CompileOptions> = flow(
  compile(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style><%-locals.css%></style>
    </head>
    <body>
      <%-locals.body%>
    </body>
    </html>`),
);
