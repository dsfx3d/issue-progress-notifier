/**
 * @type {import('postcss').ProcessOptions}
 */
module.exports = {
  plugins: [
    require("tailwindcss"),
    // require("postcss-css-variables"),
    require("@fullhuman/postcss-purgecss")({
      content: ["./**/*.tsx"],
    }),
    // require("postcss-css-variables"),
  ],
};
