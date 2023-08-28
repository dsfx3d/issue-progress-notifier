import {githubCss} from "./githubCss.mjs";
import {writeFileSync} from "node:fs";
import generateGitHubMarkdownCss from "generate-github-markdown-css";

async function run() {
  writeFileSync(githubCss, await generateGitHubMarkdownCss());
}

run();
