import type {Preview} from "@storybook/html";
import css from "../tailwind.css?inline";
import { renderHtml } from "../utils/renderHtml";

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
