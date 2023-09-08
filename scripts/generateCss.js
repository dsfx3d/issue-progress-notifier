const {writeFileSync, existsSync, mkdirSync} = require("node:fs");
const {dirname} = require("node:path");
const postcss = require("postcss");
const tailwindConfig = require("./tailwind.config");

const stylesOutput = "lib/styles.css";

if (!existsSync(dirname(stylesOutput))) {
  mkdirSync(dirname(stylesOutput), {recursive: true});
}

const css = `
@tailwind components;
@tailwind utilities;
`;

const plugins = [
  require("tailwindcss")(tailwindConfig),
  require("postcss-merge-longhand"),
];

postcss(plugins)
  .process(css, {from: undefined})
  .then(({css}) => writeFileSync(stylesOutput, css));
