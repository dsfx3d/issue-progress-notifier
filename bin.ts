import {GetIssueDocument} from "./lib/graphql";
import {GraphQLClient} from "graphql-request";
import {context} from "@actions/github";
import {createTransport} from "nodemailer";
import {emailRegex} from "./utils/emailRegex";
import {pipe} from "fp-ts/lib/function";
import {toAction} from "./action/toAction";
import {toHtml} from "./html-compiler/toHtml";
import {toIssueTemplate} from "./issue/toIssueTemplate";
import {uniqueMatchAll} from "./utils/uniqueMatchAll";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const action = toAction(
  () =>
    new GraphQLClient(context.graphqlUrl, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    }),
  client =>
    client.request(GetIssueDocument, {
      owner: context.repo.owner,
      name: context.repo.repo,
      issue: context.issue.number,
    }),
  async data => ({
    from: process.env.SMTP_USER,
    to: uniqueMatchAll(emailRegex, `${context.payload.issue?.body}`),
    subject: `${data.repository?.issue?.title}`,
    html: await pipe(data, toIssueTemplate, toHtml),
  }),
  options =>
    createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    } as SMTPTransport.Options).sendMail(options),
);
// eslint-disable-next-line unicorn/prefer-top-level-await
action().then(result => {
  if (!result.success) {
    throw result.reason;
  }
});
