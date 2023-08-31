import {Context} from "./action/Context";
import {EventAction} from "./action/EventAction";
import {GraphQLClient} from "graphql-request";
import {TActionOutput} from "./action/TActionOutput";
import {TActionResult} from "./action/TActionResult";
// import {createTransport} from "nodemailer";
import {flatMap, matchE, tryCatch, tryCatchK} from "fp-ts/lib/TaskEither";
import {identity} from "lodash";
import {of} from "fp-ts/lib/Task";
import {pipe} from "fp-ts/lib/function";
import {queryTupleResolvers} from "./action/queryTupleResolvers";
import {readFileSync} from "node:fs";
import {setActionOutput} from "./action/setActionOutput";
import {setFailed} from "@actions/core";
import {stylesOutput} from "./shared/stylesOutput";
import {subjectResolvers} from "./action/subjectResolvers";
import {subscriptionResolvers} from "./action/subscriptionResolvers";
import {templateResolvers} from "./action/templateResolvers";
import {toHtml} from "./html-compiler/toHtml";
// import Mail from "nodemailer/lib/mailer";
// import SMTPTransport from "nodemailer/lib/smtp-transport";

const context = new Context();
const eventAction = context.eventAction as EventAction;

if (!Object.values(EventAction).includes(eventAction)) {
  setFailed(`Event action ${eventAction} is not supported.`);
}

const client = new GraphQLClient(context.graphqlUrl, {
  headers: {
    Authorization: `Bearer ${context.githubToken}`,
  },
});

const toQueryTuple = queryTupleResolvers[eventAction];
const toSubscribers = subscriptionResolvers[eventAction];
const toSubject = subjectResolvers[eventAction];
const toTemplate = templateResolvers[eventAction];

const action = pipe(
  tryCatch(() => client.request(...toQueryTuple(context)), identity),
  flatMap(
    tryCatchK(
      async data => ({
        subscribers: toSubscribers(context),
        subject: toSubject(data),
        bodyHtml: await toHtml({
          body: toTemplate(data),
          css: readFileSync(stylesOutput, "utf8"),
        }),
        bodyText: "",
      }),
      identity,
    ),
  ),
  matchE<unknown, TActionOutput, TActionResult>(
    reason =>
      of({
        success: false,
        reason,
      }),
    output =>
      of({
        success: true,
        output,
      }),
  ),
);

action().then(result => {
  if (!result.success) {
    setFailed(String(result.reason));
    return;
  }
  setActionOutput(result.output);
});

// async function sendEmail(options: Mail.Options): Promise<unknown> {
//   return createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   } as SMTPTransport.Options).sendMail(options);
// }
