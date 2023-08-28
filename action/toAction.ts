import {GraphQLClient} from "graphql-request";
import {IO} from "fp-ts/lib/IO";
import {LazyArg, identity, pipe} from "fp-ts/lib/function";
import {Reader} from "fp-ts/lib/Reader";
import {TActionResult} from "./TActionResult";
import {flatMap, fromIO, matchE, tryCatchK} from "fp-ts/lib/TaskEither";
import {of} from "fp-ts/lib/Task";
import Mail from "nodemailer/lib/mailer";

export function toAction<T>(
  clientIo: IO<GraphQLClient>,
  fetchData: Reader<GraphQLClient, Promise<T>>,
  toMailOptions: Reader<T, Promise<Mail.Options>>,
  sendMail: Reader<Mail.Options, Promise<unknown>>,
): LazyArg<Promise<TActionResult>> {
  return pipe(
    fromIO(clientIo),
    flatMap(tryCatchK(fetchData, identity)),
    flatMap(tryCatchK(toMailOptions, identity)),
    flatMap(tryCatchK(sendMail, identity)),
    matchE<unknown, unknown, TActionResult>(
      reason => of({success: false, reason}),
      () => of({success: true}),
    ),
  );
}
