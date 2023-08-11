import {type Router} from "express";
import {type GraphQLClient} from "graphql-request";
import {Issue} from "@ipn/templates";
import {toGetIssueQuery} from "./toGetIssueQuery";

export function toIssuesRouter(router: Router, client: GraphQLClient): Router {
  router.get("/:owner/:repo/:number", async (req, res) => {
    const issue = await toGetIssueQuery(client, {
      owner: req.params.owner,
      name: req.params.repo,
      issue: Number(req.params.number),
    });
    const html = Issue(issue);
    res.render("layout", {html});
  });
  return router;
}
