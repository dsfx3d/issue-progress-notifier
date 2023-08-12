import {type Router} from "express";
import {issueCompiler} from "./issueCompiler";
import {toGetIssueQuery} from "./toGetIssueQuery";

export const toIssuesRouter =
  (router: Router) =>
  (thunk: ReturnType<typeof toGetIssueQuery>): Router => {
    router.get("/:owner/:repo/:number", async (req, res) => {
      const issue = await thunk([
        {
          owner: req.params.owner,
          name: req.params.repo,
          issue: Number(req.params.number),
        },
      ]);
      const compile = issueCompiler(issue);
      res.send(await compile());
    });
    return router;
  };
