import {Context} from "@actions/github/lib/context";
import {GetIssueDocument} from "../graphql/lib/graphql";
import {Issue} from "../templates/Issue";
import {TEmailTemplate} from "./TEmailTemplate";
import {TaskEither, flatMap, map, tryCatch} from "fp-ts/lib/TaskEither";
import {htmlCompiler} from "../html-compiler/htmlCompiler";
import {pipe} from "fp-ts/lib/function";
import {toGraphQLClient} from "./toGraphQLClient";

export const toIssueEmailTemplate: (
  context: Context,
  accessToken: string,
) => TaskEither<Error, TEmailTemplate> = (context, accessToken) =>
  pipe(
    tryCatch(
      () =>
        toGraphQLClient(accessToken).request(GetIssueDocument, {
          issue: context.issue.number,
          owner: context.repo.owner,
          name: context.issue.repo,
        }),
      reason => new Error(String(reason)),
    ),
    flatMap(({repository}) =>
      pipe(
        Issue({repository}),
        htmlCompiler,
        map(html => ({
          subject: `${repository?.issue?.author}`,
          html,
        })),
      ),
    ),
  );
