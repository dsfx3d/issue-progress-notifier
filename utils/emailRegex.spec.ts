import {emailRegex} from "./emailRegex";

describe("emailRegex", () => {
  test("matches valid email addresses", () => {
    expect("test@example.com".match(emailRegex)).toBeTruthy();
    expect("test.user@example.com".match(emailRegex)).toBeTruthy();
    expect("test-user@example.com".match(emailRegex)).toBeTruthy();
    expect("test_user@example.com".match(emailRegex)).toBeTruthy();
    expect("test@example.co.uk".match(emailRegex)).toBeTruthy();
    expect("test@example.io".match(emailRegex)).toBeTruthy();
  });

  test("does not match invalid email addresses", () => {
    expect("test@".match(emailRegex)).toBeFalsy();
    expect("test@example".match(emailRegex)).toBeFalsy();
    expect("test@.com".match(emailRegex)).toBeFalsy();
    expect("test@example..com".match(emailRegex)).toBeFalsy();
    expect("test@.example.com".match(emailRegex)).toBeFalsy();
    expect("test@example.com.".match(emailRegex)).toBeFalsy();
  });
});
