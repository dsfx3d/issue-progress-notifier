import {writeFileSync} from "node:fs";
import generateCss from "generate-github-markdown-css";

async function run() {
  writeFileSync("lib/github.css", await generateCss());
}

// eslint-disable-next-line unicorn/prefer-top-level-await
run();
