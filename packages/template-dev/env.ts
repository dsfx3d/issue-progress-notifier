import {load} from "ts-dotenv";
import dotenv from "dotenv";

dotenv.config();
export const env = load({
  GH_ACCESS_TOKEN: String,
});
