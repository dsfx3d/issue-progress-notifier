import {TActionOutput} from "./TActionOutput";
import {setOutput} from "@actions/core";

export function setActionOutput(output: TActionOutput) {
  setOutput("bodyHtml", output.bodyHtml);
}
