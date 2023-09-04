/* eslint-disable unicorn/prefer-module */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.tsx", "**/*/toHtml.ts"],
  plugins: [require("tailwindcss-email-variants"), require("daisyui")],
  daisyui: {
    themes: [
      {
        "github-light": {
          primary: "#0366d6", // Blue
          secondary: "#f6f8fa", // Light Gray
          accent: "#6f42c1", // GitHub Purple
          neutral: "#586069", // Dark Gray
          info: "#24292e", // Almost Black
          warning: "#ffd33d", // Yellow
          error: "#d73a49", // Red
          success: "#28a745", // Green
          "base-100": "#ffffff", // White
        },
      },
      {
        "github-dark": {
          primary: "#0d1117", // Almost Black
          secondary: "#161b22", // Dark Gray
          accent: "#6f42c1", // GitHub Purple
          neutral: "#c9d1d9", // Light Gray
          info: "#f0f6fc", // Almost White
          warning: "#dbab09", // Dark Yellow
          error: "#f85149", // Red
          success: "#238636", // Green
          "base-100": "#21262d", // Darker Gray
        },
      },
    ],
    darkTheme: "github-dark",
  },
  corePlugins: {
    preflight: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    textOpacity: false,
  },
};
