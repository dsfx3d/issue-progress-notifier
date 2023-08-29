const postcss = require("postcss");
const config = require("../postcss.config");
const {readFileSync} = require("node:fs");

const generateTailwindCss = async () => {
  const inputCss = readFileSync("tailwind.css");
  return postcss(config.plugins)
    .process(inputCss, {from: undefined})
    .then(output => output.css);
};

module.exports = {
  generateTailwindCss,
};
