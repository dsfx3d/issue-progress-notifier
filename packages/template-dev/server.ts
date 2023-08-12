import {env} from "./env";
import {pipe} from "fp-ts/function";
import {toGetIssueQuery} from "./issues/toGetIssueQuery";
import {toGraphQLClient} from "./toGraphQLClient";
import {toIssuesRouter} from "./issues/toIssuesRouter";
import express from "express";

const app = express();
app.use(
  "/issues",
  pipe(
    env.GH_ACCESS_TOKEN,
    toGraphQLClient,
    toGetIssueQuery,
    toIssuesRouter(express.Router()),
  ),
);
app.listen(3000, () => {
  console.log("Listening on port http://localhost:3000");
});
