import {TEmailTemplate} from "./TEmailTemplate";
import {TaskEither} from "fp-ts/lib/TaskEither";
import {Transporter} from "nodemailer";

export type TProgramDeps = {
  readonly senderEmail: string;
  readonly toEmailTemplate: TaskEither<Error, TEmailTemplate>;
  readonly transporter: Transporter;
};
