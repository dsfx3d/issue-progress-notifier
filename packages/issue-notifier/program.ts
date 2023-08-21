import {ReaderTask} from "fp-ts/lib/ReaderTask";
import {TProgramDeps} from "./TProgramDeps";
import {TProgramResult} from "./TProgramResult";
import {flatMap, map, matchE, tryCatchK} from "fp-ts/lib/TaskEither";
import {of} from "fp-ts/lib/Task";
import {pipe} from "fp-ts/lib/function";
import {sendEmail} from "./sendEmail";
import {toMailOptions} from "./toMailOptions";

export const program: ReaderTask<TProgramDeps, TProgramResult> = ({
  envVars,
  transporter,
  toEmailTemplate,
}: TProgramDeps) =>
  pipe(
    toEmailTemplate,
    map(toMailOptions(envVars)),
    flatMap(
      tryCatchK(sendEmail(transporter), reason => new Error(String(reason))),
    ),
    matchE<Error, unknown, TProgramResult>(
      error => of({success: false, error}),
      () => of({success: true}),
    ),
  );
