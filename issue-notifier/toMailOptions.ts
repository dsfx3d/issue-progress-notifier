import {Options} from "nodemailer/lib/mailer";
import {Reader} from "fp-ts/lib/Reader";
import {TEmailTemplate} from "./TEmailTemplate";

export const toMailOptions: Reader<string, Reader<TEmailTemplate, Options>> =
  senderEmail =>
  ({html, subject: title}) => ({
    from: senderEmail,
    to: [],
    subject: title,
    html,
  });
