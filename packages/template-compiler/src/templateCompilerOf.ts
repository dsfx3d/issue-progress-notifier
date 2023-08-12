import {Reader} from "fp-ts/lib/Reader";
import {createTemplateCompilerFactory} from "./createTemplateCompilerFactory";
import {template} from "./template";
import generateCss from "generate-github-markdown-css";

export const templateCompilerOf = <TProps>(toBody: Reader<TProps, string>) =>
  createTemplateCompilerFactory<TProps>(template, generateCss)(toBody);
