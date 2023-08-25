import {GraphQLClient} from "graphql-request";
import {IO} from "fp-ts/lib/IO";
import {Reader} from "fp-ts/lib/Reader";
import {TActionResult} from "./TActionResult";
import {TaskEither as Task, of} from "fp-ts/lib/Task";
import {flatMap, fromIO, matchE, tryCatchK} from "fp-ts/lib/TaskEither";
import {identity, pipe} from "fp-ts/lib/function";
import Mail from "nodemailer/lib/mailer";

export function toAction<T>(
  clientIo: IO<GraphQLClient>,
  fetchData: Reader<GraphQLClient, Promise<T>>,
  toMailOptions: Reader<T, Promise<Mail.Options>>,
  sendMail: Reader<Mail.Options, Promise<unknown>>,
): Task<TActionResult> {
  return pipe(
    clientIo,
    fromIO,
    flatMap(tryCatchK(fetchData, identity)),
    flatMap(tryCatchK(toMailOptions, identity)),
    flatMap(tryCatchK(sendMail, identity)),
    matchE<unknown, unknown, TActionResult>(
      reason => of({success: false, reason}),
      () => of({success: true}),
    ),
  );
}
