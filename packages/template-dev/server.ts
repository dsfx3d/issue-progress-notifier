import express from "express";
import {toIssuesRouter} from "./issues/toIssuesRouter";
import {toGraphQLClient} from "./toGraphQLClient";
import {env} from "./env";

const app = express();
app.set("view engine", "ejs");
app.use(
  "/issues",
  toIssuesRouter(express.Router(), toGraphQLClient(env.GH_ACCESS_TOKEN)),
);
app.listen(3000, () => {
  console.log("Listening on port http://localhost:3000");
});
