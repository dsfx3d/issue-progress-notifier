/* eslint-disable unicorn/prefer-module */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.tsx", "**/*/toHtml.ts"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-email-variants")],
  corePlugins: {
    preflight: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    textOpacity: false,
  },
};
