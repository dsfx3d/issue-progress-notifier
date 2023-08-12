import express from "express";
import {pipe} from "fp-ts/function";
import {toIssuesRouter} from "./issues/toIssuesRouter";
import {toGraphQLClient} from "./toGraphQLClient";
import {env} from "./env";
import {toGetIssueQuery} from "./issues/toGetIssueQuery";

const app = express();
app.set("view engine", "ejs");
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
