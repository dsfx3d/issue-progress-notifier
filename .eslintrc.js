/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
    },
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
    jasmine: true,
  },
  globals: {
    NodeJS: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  root: true,
};
