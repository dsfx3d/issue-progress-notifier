import {renderHtml} from "../utils/renderHtml";
import type {Preview} from "@storybook/html";
// @ts-ignore
import css from "../lib/styles.css?inline";

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (story, args) =>
      renderHtml(document, {
        html: story(args).toString(),
        css,
      }),
  ],
};

export default preview;
