const {writeFileSync, existsSync, mkdirSync, readFileSync} = require("node:fs");
const {dirname} = require("node:path");
const {stylesOutput} = require("../shared/stylesOutput");
const postcss = require("postcss");

if (!existsSync(dirname(stylesOutput))) {
  mkdirSync(dirname(stylesOutput), {recursive: true});
}
const plugins = [require("tailwindcss"), require("postcss-merge-longhand")];
const css = readFileSync("tailwind.css");
postcss(plugins)
  .process(css, {from: undefined})
  .then(({css}) => writeFileSync(stylesOutput, css));
