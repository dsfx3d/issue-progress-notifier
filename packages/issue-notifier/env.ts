import {load} from "ts-dotenv";

export const env = load({
  GITHUB_TOKEN: String,
  SMTP_HOST: String,
  SMTP_PORT: Number,
  SMTP_USER: String,
  SMTP_PASS: String,
  SMTP_FROM: String,
});
