import {context} from "@actions/github";
import {emailRegex, uniqueMatchAll} from "@issue-notifier/utils";
import {env} from "./env";
import {program} from "./program";
import {toIssueEmailTemplate} from "./toIssueEmailTemplate";
import {toTransporter} from "./toTransporter";

const run = program({
  senderEmail: env.SMTP_FROM,
  transporter: toTransporter(env),
  emailTemplate: toIssueEmailTemplate(context, env.GITHUB_TOKEN),
  recipients: uniqueMatchAll(emailRegex, `${context.payload.issue?.body}`),
});

// eslint-disable-next-line unicorn/prefer-top-level-await
run()
  .then(result => {
    if (!result.success) {
      console.error(result.error);
      throw result.error;
    }
  })
  // eslint-disable-next-line unicorn/prefer-top-level-await
  .catch(error => {
    console.error(error);
    throw error;
  });
