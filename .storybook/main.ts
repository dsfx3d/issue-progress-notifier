import type {StorybookConfig} from "@storybook/html-vite";

const config: StorybookConfig = {
  stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async config => {
    return {
      ...config,
      resolve: {
        alias: {
          ...config.resolve?.alias,
          "typed-html": "typed-html/dist/esm/src/elements",
        },
      },
    };
  },
};
export default config;
