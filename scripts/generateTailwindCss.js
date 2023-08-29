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

module.exports = {
  generateTailwindCss,
};
