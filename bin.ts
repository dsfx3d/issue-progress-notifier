import {Context} from "./action/Context";
import {pipe} from "fp-ts/lib/function";
import {setFailed, setOutput} from "@actions/core";
import {toTemplateCompiler} from "./action/toTemplateCompiler";

pipe(new Context(), toTemplateCompiler, compile => compile()).then(result => {
  if (result.failed) {
    setFailed(String(result.reason));
    return;
  }
  setOutput("template", result.template);
  console.log(result.template);
});
