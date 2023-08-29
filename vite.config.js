import {defineConfig} from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "typed-html": "typed-html/dist/esm/src/elements",
    },
  },
});
