import {emailRegex} from "./emailRegex";

describe("emailRegex validation", () => {
  test("recognizes valid email addresses", () => {
    const validEmails = [
      "test@example.com",
      "test.user@example.com",
      "test-user@example.com",
      "test_user@example.com",
      "test@example.co.uk",
      "test@example.io",
    ];

    for (const email of validEmails) {
      expect(email.match(emailRegex)).toBeTruthy();
    }
  });

  test("recognizes invalid email addresses", () => {
    const invalidEmails = [
      "test@",
      "test@example",
      "test@.com",
      "test@example..com",
      "test@.example.com",
      "test@example.com.",
    ];

    for (const email of invalidEmails) {
      expect(email.match(emailRegex)).toBeFalsy();
    }
  });
});
