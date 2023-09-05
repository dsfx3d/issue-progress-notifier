import {Context} from "./Context";
import {setFailed, setOutput} from "@actions/core";
import {templateResolvers} from "./templateResolvers";
import {toTemplateCompiler} from "../template-compiler/toTemplateCompiler";

const context = new Context(templateResolvers);
const compile = toTemplateCompiler(context);
compile().then(result => {
  if (result.failed) {
    setFailed(String(result.reason));
    return;
  }
  setOutput("template", result.template);
  console.log(result.template);
});
