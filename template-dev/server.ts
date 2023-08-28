import {GetIssue} from "./mock-data/GetIssue";
import {getGitHubCss} from "../html-compiler/getGitHubCss";
import {readFile} from "node:fs/promises";
import {toGetIssueTemplate} from "../issue/toGetIssueTemplate";
import {toHtml} from "../html-compiler/toHtml";
import {toIssueHead} from "../issue/toIssueHead";
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

app.get("/issue/head", async (req, res) => {
  const head = toIssueHead();
  res.send(
    await toHtml({
      body: head,
      css: await readFile("lib/tailwind.css", "utf8"),
    }),
  );
});

app.listen(3000, () => {
  console.log("Server listening on port http://localhost:3000");
});
