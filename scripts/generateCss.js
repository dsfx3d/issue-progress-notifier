const {writeFileSync, existsSync, mkdirSync} = require("node:fs");
const {generateTailwindCss} = require("./generateTailwindCss");
const {stylesOutput} = require("../shared/stylesOutput");
const {dirname} = require("node:path");

async function run() {
  const getCss = (await import("generate-github-markdown-css")).default;
  const css = `${await generateTailwindCss()}
${await getCss()}`;

  if (!existsSync(dirname(stylesOutput))) {
    mkdirSync(dirname(stylesOutput), {recursive: true});
  }
  writeFileSync(stylesOutput, css);
}

run();
