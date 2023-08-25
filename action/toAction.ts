import {LazyArg, identity, pipe} from "fp-ts/lib/function";
import {Reader} from "fp-ts/lib/Reader";
import {TActionResult} from "./TActionResult";
import {flatMap, map, matchE, tryCatch, tryCatchK} from "fp-ts/lib/TaskEither";
import {htmlCompiler} from "../html-compiler/htmlCompiler";
import {of} from "fp-ts/lib/Task";
import Mail from "nodemailer/lib/mailer";

export function toAction<T>(
  fetchData: LazyArg<Promise<T>>,
  toMailOptions: Reader<T, Mail.Options>,
  sendMail: Reader<Mail.Options, Promise<unknown>>,
): LazyArg<Promise<TActionResult>> {
  return pipe(
    tryCatch(fetchData, identity),
    map(toMailOptions),
    flatMap(options =>
      pipe(
        htmlCompiler(options.html as string),
        map(html => ({...options, html})),
      ),
    ),
    flatMap(tryCatchK(sendMail, identity)),
    matchE<unknown, unknown, TActionResult>(
      reason => of({success: false, reason}),
      () => of({success: true}),
    ),
  );
}
