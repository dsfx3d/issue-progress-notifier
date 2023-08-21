import {Options} from "nodemailer/lib/mailer";
import {Reader} from "fp-ts/lib/Reader";
import {Transporter} from "nodemailer";

export const sendEmail: Reader<
  Transporter,
  Reader<Options, Promise<unknown>>
> = transporter => options =>
  new Promise((resolve, reject) =>
    transporter.sendMail(options, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    }),
  );
