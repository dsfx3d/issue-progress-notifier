import {GetIssueDocument, GetIssueQuery} from "./graphql/lib/graphql";
import {GraphQLClient} from "graphql-request";
import {Issue} from "./templates/Issue";
import {context} from "@actions/github";
import {createTransport} from "nodemailer";
import {emailRegex} from "./utils/emailRegex";
import {flatMap, map, matchE, tryCatch, tryCatchK} from "fp-ts/lib/TaskEither";
import {htmlCompiler} from "./html-compiler/htmlCompiler";
import {identity, pipe} from "fp-ts/lib/function";
import {of} from "fp-ts/lib/Task";
import {uniqueMatchAll} from "./utils/uniqueMatchAll";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const env = process.env;
console.log("SMTP_HOST", env.SMTP_HOST);

type TSendEmailResult =
  | {
      success: false;
      reason: unknown;
    }
  | {
      success: true;
    };

const transporter = createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
} as SMTPTransport.Options);

const client = new GraphQLClient(context.graphqlUrl, {
  headers: {
    Authorization: `Bearer ${env.ACCESS_TOKEN}`,
  },
});

const fetchData = (): Promise<GetIssueQuery> =>
  client.request(GetIssueDocument, {
    issue: context.issue.number,
    owner: context.repo.owner,
    name: context.issue.repo,
  });

const sendMail = async (options: Mail.Options) => transporter.sendMail(options);

const program = pipe(
  tryCatch(fetchData, identity),
  flatMap(data =>
    pipe(
      Issue(data),
      htmlCompiler,
      map(html => ({
        from: env.SMTP_FROM,
        to: uniqueMatchAll(emailRegex, `${context.payload.issue?.body}`),
        subject: `${data.repository?.issue?.title}`,
        html,
      })),
    ),
  ),
  flatMap(tryCatchK(sendMail, identity)),
  matchE<unknown, unknown, TSendEmailResult>(
    reason => of({success: false, reason}),
    () => of({success: true}),
  ),
);

// eslint-disable-next-line unicorn/prefer-top-level-await
program()
  .then(result => {
    console.log(
      "recipients",
      `${context.payload.issue?.body}`,
      JSON.stringify(
        uniqueMatchAll(emailRegex, `${context.payload.issue?.body}`),
      ),
    );
    if (!result.success) {
      console.error(result.reason);
      throw new Error(String(result.reason));
    }
  })
  // eslint-disable-next-line unicorn/prefer-top-level-await
  .catch(error => {
    console.error(error);
    throw error;
  });
