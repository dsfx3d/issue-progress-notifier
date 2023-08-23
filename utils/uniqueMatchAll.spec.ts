import {uniqueMatchAll} from "./uniqueMatchAll";

describe("uniqueMatchAll", () => {
  it("returns unique matches from a string", () => {
    const regex = /(\w+@\w+\.\w+)/g;
    const text = "email1@example.com email2@example.com email1@example.com";
    const result = uniqueMatchAll(regex, text);
    expect(result).toEqual(["email1@example.com", "email2@example.com"]);
  });

  it("returns an empty array when no matches are found", () => {
    const regex = /(\w+@\w+\.\w+)/g;
    const text = "no emails here";
    const result = uniqueMatchAll(regex, text);
    expect(result).toEqual([]);
  });

  it("handles special characters correctly", () => {
    const regex = /(#\w+)/g;
    const text = "#tag1 #tag2 #tag1";
    const result = uniqueMatchAll(regex, text);
    expect(result).toEqual(["#tag1", "#tag2"]);
  });
});
