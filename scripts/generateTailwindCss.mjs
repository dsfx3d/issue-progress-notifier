import {tailwindCss} from "./tailwindCss.mjs";
import {writeFileSync} from "node:fs";
import postcss from "postcss";
import tailwindcss from "tailwindcss";

const generateTailwindCss = async () => {
  const inputCss = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`;
  const output = await postcss([tailwindcss("tailwind.config.js")]).process(
    inputCss,
    {
      from: undefined,
    },
  );
  return output.css;
};

generateTailwindCss().then(css => {
  writeFileSync(tailwindCss, css);
});
