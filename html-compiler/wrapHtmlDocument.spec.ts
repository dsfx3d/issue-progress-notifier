import {wrapHtmlDocument} from "./wrapHtmlDocument";

const tests: [string, string][] = [
  ["includes the input content within the body tags", "Sample content"],
  ["handles special characters correctly", "Hello & Welcome!"],
];

const testRunner = (tests: [string, string][]) => {
  for (const [title, input] of tests) {
    it(title, async () => {
      const result = await wrapHtmlDocument(input);
      expect(result).toContain(`<body>${input}</body>`);
    });
  }
};

describe("wrapHtmlDocument", () => {
  // eslint-disable-next-line max-statements
  it("returns a valid HTML document", async () => {
    const mockInput = "Sample content";
    const result = await wrapHtmlDocument(mockInput);
    expect(result.startsWith("<!DOCTYPE html>")).toBeTruthy();
    expect(result).toContain('<html lang="en">');
    expect(result).toContain("<head>");
    expect(result).toContain('<meta charset="UTF-8">');
    expect(result).toContain(
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    );
    expect(result).toContain("</head>");
    expect(result).toContain("<body>");
    expect(result).toContain("</body>");
    expect(result).toContain("</html>");
  });
  testRunner(tests);
});
