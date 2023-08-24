import {GetIssueDocument} from "./graphql/lib/graphql";
import {GraphQLClient} from "graphql-request";
import {Issue} from "./templates/Issue";
import {context} from "@actions/github";
import {createTransport} from "nodemailer";
import {emailRegex} from "./utils/emailRegex";
import {env} from "./env";
import {flatMap, map, matchE, tryCatch, tryCatchK} from "fp-ts/lib/TaskEither";
import {htmlCompiler} from "./html-compiler/htmlCompiler";
import {identity, pipe} from "fp-ts/lib/function";
import {of} from "fp-ts/lib/Task";
import {uniqueMatchAll} from "./utils/uniqueMatchAll";

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
});

const client = new GraphQLClient(context.graphqlUrl, {
  headers: {
    Authorization: `Bearer ${env.GITHUB_TOKEN}`,
  },
});

const program = pipe(
  tryCatch(
    () =>
      client.request(GetIssueDocument, {
        issue: context.issue.number,
        owner: context.repo.owner,
        name: context.issue.repo,
      }),
    identity,
  ),
  flatMap(data =>
    pipe(
      Issue(data),
      htmlCompiler,
      map(html => ({
        from: env.SMTP_FROM,
        to: uniqueMatchAll(emailRegex, `${context.payload.issue?.body}`),
        subject: `${data.repository?.issue?.author}`,
        html,
      })),
    ),
  ),
  flatMap(tryCatchK(options => transporter.sendMail(options), identity)),
  matchE<unknown, unknown, TSendEmailResult>(
    reason => of({success: false, reason}),
    () => of({success: true}),
  ),
);

// eslint-disable-next-line unicorn/prefer-top-level-await
program()
  .then(result => {
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
