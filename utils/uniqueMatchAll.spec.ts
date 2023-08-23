import {uniqueMatchAll} from "./uniqueMatchAll";

const tests: [string, RegExp, string, string[]][] = [
  [
    "returns unique matches from a string",
    /(\w+@\w+\.\w+)/g,
    "email1@example.com email2@example.com email1@example.com",
    ["email1@example.com", "email2@example.com"],
  ],
  [
    "returns an empty array when no matches are found",
    /(\w+@\w+\.\w+)/g,
    "no emails here",
    [],
  ],
  [
    "handles special characters correctly",
    /(#\w+)/g,
    "#tag1 #tag2 #tag1",
    ["#tag1", "#tag2"],
  ],
];

function runner(name: string, regex: RegExp, text: string, expected: string[]) {
  test(name, () => {
    const result = uniqueMatchAll(regex, text);
    expect(result).toEqual(expected);
  });
}

describe("uniqueMatchAll", () => {
  for (const [name, regex, text, expected] of tests) {
    runner(name, regex, text, expected);
  }
});
