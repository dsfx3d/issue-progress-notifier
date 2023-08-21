import {context} from "@actions/github";
import {env} from "./env";
import {program} from "./program";
import {toIssueEmailTemplate} from "./toIssueEmailTemplate";
import {toTransporter} from "./toTransporter";

const run = program({
  envVars: env,
  transporter: toTransporter(env),
  toEmailTemplate: toIssueEmailTemplate(context, env.GITHUB_TOKEN),
});

// eslint-disable-next-line unicorn/prefer-top-level-await
run().then(result => {
  if (!result.success) {
    console.error(result.error);
    throw result.error;
  }
});
