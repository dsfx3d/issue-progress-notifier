import {writeFileSync} from "node:fs";
import generateGitHubMarkdownCss from "generate-github-markdown-css";
import postcss from "postcss";
import tailwindcss from "tailwindcss";

const generateTailwindCss = async () => {
  const inputCss = "@tailwind base;@tailwind components;@tailwind utilities;";
  const output = await postcss([tailwindcss("tailwind.config.js")]).process(
    inputCss,
    {
      from: undefined,
    },
  );
  return output.css;
};

async function run() {
  writeFileSync(
    "lib/styles.css",
    `
    ${await generateTailwindCss()}
    ${await generateGitHubMarkdownCss()}
    `,
  );
}

// eslint-disable-next-line unicorn/prefer-top-level-await
run();
