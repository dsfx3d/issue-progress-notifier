import {emailRegex} from "./emailRegex";

function matchExpect(
  regex: RegExp,
  inputs: string[],
): jest.JestMatchers<RegExpMatchArray | null>[] {
  return inputs.map(input => input.match(regex)).map(result => expect(result));
}

describe("emailRegex validation", () => {
  test("recognizes valid email addresses", () => {
    for (const result of matchExpect(emailRegex, [
      "test@example.com",
      "test.user@example.com",
      "test-user@example.com",
      "test_user@example.com",
      "test@example.co.uk",
      "test@example.io",
    ])) {
      result.toBeTruthy();
    }
  });

  test("recognizes invalid email addresses", () => {
    for (const result of matchExpect(emailRegex, [
      "test@",
      "test@example",
      "test@.com",
      "test@example..com",
      "test@.example.com",
      "test@example.com.",
    ])) {
      result.toBeFalsy();
    }
  });
});
