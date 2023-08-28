const tailwindCss = require("./tailwindCss");
const {writeFileSync} = require("node:fs");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");

const generateTailwindCss = async () => {
  const inputCss = `
@tailwind base;
@tailwind components;
@tailwind utilities;
  `;
  return postcss([tailwindcss("tailwind.config.js")])
    .process(inputCss, {from: undefined})
    .then(output => output.css);
};
generateTailwindCss().then(css => {
  writeFileSync(tailwindCss, css);
});
