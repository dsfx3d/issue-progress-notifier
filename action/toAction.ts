import {Context} from "@actions/github/lib/context";
import {GraphQLClient} from "graphql-request";
import {LazyArg, identity, pipe} from "fp-ts/lib/function";
import {Reader} from "fp-ts/lib/Reader";
import {TActionResult} from "./TActionResult";
import {
  flatMap,
  fromIO,
  map,
  matchE,
  tryCatch,
  tryCatchK,
} from "fp-ts/lib/TaskEither";
import {map as mapIO} from "fp-ts/lib/IO";
import {of} from "fp-ts/lib/Task";
import {toHtml} from "../html-compiler/toHtml";
import Mail from "nodemailer/lib/mailer";

// eslint-disable-next-line max-params
export function toAction<T>(
  contextThunk: LazyArg<Context>,
  toClient: Reader<Context, GraphQLClient>,
  fetchData: Reader<GraphQLClient, Promise<T>>,
  toMailOptions: Reader<T, Mail.Options>,
  sendMail: Reader<Mail.Options, Promise<unknown>>,
): LazyArg<Promise<TActionResult>> {
  return pipe(
    contextThunk,
    mapIO(toClient),
    fromIO,
    flatMap(tryCatchK(fetchData, identity)),
    map(toMailOptions),
    flatMap(options =>
      pipe(
        tryCatch(() => toHtml(options.html as string), identity),
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
