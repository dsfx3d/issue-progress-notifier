import {htmlCompiler} from "./htmlCompiler";

describe("htmlCompiler", () => {
  it("wraps the provided input in an HTML structure", async () => {
    const mockInput = "Hello World";
    const result = await htmlCompiler(mockInput);
    expect(result).toContain("<html");
    expect(result).toContain("<head>");
    expect(result).toContain("<body>Hello World</body>");
  });

  it("appends a style tag to the head of the document", async () => {
    const mockInput = "Hello World";
    const result = await htmlCompiler(mockInput);
    expect(result).toContain("<style>");
  });

  it("returns minified html", async () => {
    const mockInput = `
      <div>
        Hello World
      </div>
    `;
    const result = await htmlCompiler(mockInput);
    expect(result).not.toContain("\n");
  });
});
