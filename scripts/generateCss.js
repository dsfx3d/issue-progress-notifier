const {writeFileSync, existsSync, mkdirSync, readFileSync} = require("node:fs");
const {dirname} = require("node:path");
const {stylesOutput} = require("../shared/stylesOutput");
const postcss = require("postcss");
const config = require("../postcss.config");

async function run() {
  const css = readFileSync("tailwind.css");
  if (!existsSync(dirname(stylesOutput))) {
    mkdirSync(dirname(stylesOutput), {recursive: true});
  }
  postcss(config.plugins)
    .process(css, {from: undefined})
    .then(({css}) => writeFileSync(stylesOutput, css));
}

run();
