import {Context} from "@actions/github/lib/context";
import {GraphQLClient} from "graphql-request";
import {Transporter} from "nodemailer";
import {type env} from "./env";

export type TProgramDeps = {
  envVars: typeof env;
  context: Context;
  client: GraphQLClient;
  transporter: Transporter;
};
