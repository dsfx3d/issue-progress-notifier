import {TEmailTemplate} from "./TEmailTemplate";
import {TaskEither} from "fp-ts/lib/TaskEither";
import {Transporter} from "nodemailer";
import {type env} from "./env";

export type TProgramDeps = {
  readonly envVars: typeof env;
  readonly toEmailTemplate: TaskEither<Error, TEmailTemplate>;
  readonly transporter: Transporter;
};
