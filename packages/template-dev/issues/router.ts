import express from "express";
import {GraphQLClient} from "graphql-request";
import {GetIssueDocument} from "@ipn/issues-gql";
import {Issue} from "@ipn/templates";
import {env} from "../env";
import {IssueRequest} from "./IssueRequest";

export const router = express.Router();
const client = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    Authorization: `Bearer ${env.GH_ACCESS_TOKEN}`,
  },
});

router.get("/:number", async (req, res) => {
  const html = Issue((req as unknown as IssueRequest).issue);
  res.render("layout", {html});
});

router.param("number", async (req, res, next, number) => {
  const issue = await client.request(GetIssueDocument, {
    issue: Number(number),
    owner: "dsfx3d",
    name: "issue-progress-notifier",
  });
  if (issue.repository) {
    (req as IssueRequest).issue = issue;
    next();
  } else {
    res.sendStatus(404);
  }
});
