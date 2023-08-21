import {Reader} from "fp-ts/lib/Reader";
import {Transporter, createTransport} from "nodemailer";
import {env} from "./env";

export const toTransporter: Reader<typeof env, Transporter> = envVars =>
  createTransport({
    host: envVars.SMTP_HOST,
    port: envVars.SMTP_PORT,
    auth: {
      user: envVars.SMTP_USER,
      pass: envVars.SMTP_PASS,
    },
  });
