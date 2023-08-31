import {TActionOutput} from "./TActionOutput";
import {setOutput} from "@actions/core";

export function setActionOutput(output: TActionOutput) {
  setOutput("subscribers", output.subscribers.join(","));
  setOutput("subject", output.subject);
  setOutput("bodyHtml", output.bodyHtml);
  setOutput("bodyText", output.bodyText);
}
