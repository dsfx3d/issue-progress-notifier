import dotenv from "dotenv";
import {load} from "ts-dotenv";

dotenv.config();
export const env = load({
  GH_ACCESS_TOKEN: String,
});
