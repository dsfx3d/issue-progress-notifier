/* eslint-disable unicorn/prefer-module */

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  roots: ["<rootDir>"],
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "clover"],
  collectCoverageFrom: [
    "**/*/*.{ts,js}",
    "!**/*.d.ts",
    "!graphql/lib/*",
    "!**/node_modules/**",
    "!coverage/**",
  ],
};
