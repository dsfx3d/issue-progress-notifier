import {Options} from "nodemailer/lib/mailer";
import {Reader} from "fp-ts/lib/Reader";
import {TEmailTemplate} from "./TEmailTemplate";
import {env} from "./env";

export const toMailOptions: Reader<
  typeof env,
  Reader<TEmailTemplate, Options>
> =
  envVars =>
  ({html, subject: title}) => ({
    from: envVars.SMTP_FROM,
    to: [],
    subject: title,
    html,
  });
