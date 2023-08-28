import {GraphQLClient} from "graphql-request";
import {IssueOpenedDocument} from "./lib/graphql";
import {context} from "@actions/github";
import {createTransport} from "nodemailer";
import {emailRegex} from "./utils/emailRegex";
import {readFile} from "node:fs/promises";
import {toAction} from "./action/toAction";
import {toHtml} from "./html-compiler/toHtml";
import {toIssueOpenedTemplate} from "./issue/toIssueOpenedTemplate";
import {uniqueMatchAll} from "./utils/uniqueMatchAll";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import githubCss from "./scripts/githubCss";
import tailwindCss from "./scripts/tailwindCss";

const action = toAction(
  () =>
    new GraphQLClient(context.graphqlUrl, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    }),
  client =>
    client.request(IssueOpenedDocument, {
      owner: context.repo.owner,
      name: context.repo.repo,
      issue: context.issue.number,
    }),
  async data => ({
    from: process.env.SMTP_USER,
    to: uniqueMatchAll(emailRegex, `${context.payload.issue?.body}`),
    subject: `${data.repository?.issue?.[" $fragmentRefs"]?.IssueHeadFragment.title}`,
    html: await toHtml({
      body: toIssueOpenedTemplate(data),
      css: `${await readFile("./lib/tailwind.css", "utf8")}
${await readFile("./lib/github.css", "utf8")}`,
    }),
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

action().then(result => {
  if (!result.success) {
    throw result.reason;
  }
});
