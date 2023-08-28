import {writeFileSync} from "node:fs";
import generateGitHubMarkdownCss from "generate-github-markdown-css";

async function run() {
  writeFileSync("lib/styles.css", await generateGitHubMarkdownCss());
}

run();
