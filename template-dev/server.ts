import {GetIssue} from "./mock-data/GetIssue";
import {getGitHubCss} from "../html-compiler/getGitHubCss";
import {toGetIssueTemplate} from "../issue/toGetIssueTemplate";
import {toHtml} from "../html-compiler/toHtml";
import express from "express";

const app = express();

app.use(express.static("./lib"));

app.get("/issue", async (_, res) => {
  const template = toGetIssueTemplate(GetIssue);
  res.send(
    await toHtml({
      body: template,
      css: await getGitHubCss(),
    }),
  );
});

app.listen(3000, () => {
  console.log("Server listening on port http://localhost:3000");
});
