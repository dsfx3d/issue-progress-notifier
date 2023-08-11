import {load} from "ts-dotenv";

export const env = load({
  GH_ACCESS_TOKEN: String,
});
