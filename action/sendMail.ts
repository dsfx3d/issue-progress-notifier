import {IO} from "fp-ts/lib/IO";
import {Reader} from "fp-ts/lib/Reader";
import {Transporter} from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export function sendMail(
  getTransporter: IO<Transporter>,
): Reader<Mail.Options, Promise<unknown>> {
  return function (options: Mail.Options) {
    return getTransporter().sendMail(options);
  };
}
