import {Reader} from "fp-ts/lib/Reader";
import {emailRegex} from "./emailRegex";

type JestRegexMatcher = jest.JestMatchers<RegExpMatchArray | null>;

function toMatchers(regex: RegExp, inputs: string[]): JestRegexMatcher[] {
  return inputs.map(input => expect(input.match(regex)));
}

const createBulkMatcher =
  (regex: RegExp) =>
  (
    name: string,
    expectation: Reader<JestRegexMatcher, void>,
    inputs: string[],
  ) => {
    test(name, () => {
      for (const matcher of toMatchers(regex, inputs)) {
        expectation(matcher);
      }
    });
  };

const tests: [string, Reader<JestRegexMatcher, void>, string[]][] = [
  [
    "recognizes valid email addresses",
    result => result.toBeTruthy(),
    [
      "test@example.com",
      "test.user@example.com",
      "test-user@example.com",
      "test_user@example.com",
      "test@example.co.uk",
      "test@example.io",
    ],
  ],
  [
    "recognizes invalid email addresses",
    result => result.toBeFalsy(),
    [
      "test@",
      "test@example",
      "test@.com",
      "test@example..com",
      "test@.example.com",
      "test@example.com.",
    ],
  ],
];

describe("emailRegex validation", () => {
  const emailMatcher = createBulkMatcher(emailRegex);
  for (const [name, expectation, inputs] of tests) {
    emailMatcher(name, expectation, inputs);
  }
});
