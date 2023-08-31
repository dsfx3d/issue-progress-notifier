import {TActionOutput} from "./TActionOutput";
import {setOutput} from "@actions/core";

export function setActionOutput(output: TActionOutput) {
  setOutput(
    "subscribers",
    Buffer.from(`${output.subscribers.join(",")}`).toString("base64"),
  );
  setOutput("subject", output.subject);
  setOutput("bodyHtml", output.bodyHtml);
  setOutput("bodyText", output.bodyText);
}
