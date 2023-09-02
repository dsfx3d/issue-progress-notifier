import {Context} from "./Context";
import {pipe} from "fp-ts/lib/function";
import {setFailed, setOutput} from "@actions/core";
import {templateResolvers} from "./templateResolvers";
import {toTemplateCompiler} from "../template-compiler/toTemplateCompiler";

const context = new Context(templateResolvers);
pipe(context, toTemplateCompiler, compile => compile()).then(result => {
  if (result.failed) {
    setFailed(String(result.reason));
    return;
  }
  setOutput("template", result.template);
  console.log(result.template);
});
