import {TActionOutput} from "./TActionOutput";

export type TActionResult =
  | {
      success: false;
      reason: unknown;
    }
  | {
      success: true;
      output: TActionOutput;
    };
