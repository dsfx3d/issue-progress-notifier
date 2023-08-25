import {LazyArg, identity, pipe} from "fp-ts/lib/function";
import {Reader} from "fp-ts/lib/Reader";
import {TActionResult} from "./TActionResult";
import {TaskEither, flatMap, matchE, tryCatchK} from "fp-ts/lib/TaskEither";
import {of} from "fp-ts/lib/Task";
import Mail from "nodemailer/lib/mailer";

export function toAction(
  options: TaskEither<unknown, Mail.Options>,
  sendMail: Reader<Mail.Options, Promise<unknown>>,
): LazyArg<Promise<TActionResult>> {
  return pipe(
    options,
    flatMap(tryCatchK(sendMail, identity)),
    matchE<unknown, unknown, TActionResult>(
      reason => of({success: false, reason}),
      () => of({success: true}),
    ),
  );
}
