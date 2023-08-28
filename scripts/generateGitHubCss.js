const githubCss = require("./githubCss");
const {writeFileSync} = require("node:fs");

async function run() {
  const generateGitHubMarkdownCss = await import(
    "generate-github-markdown-css"
  );
  const css = await generateGitHubMarkdownCss.default();
  return writeFileSync(githubCss, css);
}

run();
