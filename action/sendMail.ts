import {Reader} from "fp-ts/lib/Reader";
import {Transporter} from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export function sendMail(
  transporter: Transporter,
): Reader<Mail.Options, Promise<unknown>> {
  return function (options: Mail.Options) {
    return transporter.sendMail(options);
  };
}
