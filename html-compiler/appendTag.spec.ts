import {Reader} from "fp-ts/lib/Reader";
import {appendTag} from "./appendTag";

type Matcher = jest.JestMatchers<Promise<string>>;
type Test = [
  string,
  string,
  (document: Document) => Element | null,
  (document: Document) => Promise<Element>,
  Reader<Matcher, void>,
];

const toParent = (document: Document) => document.querySelector("#parent");
const toChild = async (document: Document) => {
  const tag = document.createElement("span");
  tag.innerHTML = "Test";
  return tag;
};
const input = "<span>Test</span>";

const tests: Test[] = [
  [
    "appends a tag to the parent element",
    "<div id='parent'></div>",
    (matcher: Matcher) => matcher.resolves.toContain(input),
  ] as const,
  [
    "throws an error if parent not found",
    "<div id='different-parent'></div>",
    (matcher: Matcher) => matcher.rejects.toThrow(),
  ] as const,
].map<Test>(([title, parent, expectation]) => [
  title,
  parent,
  toParent,
  toChild,
  expectation,
]);

const testRunner = (tests: Test[]) => {
  for (const [title, parent, getParent, toChild, expectation] of tests) {
    it(title, async () => {
      const transform = appendTag({getParent, toElement: toChild});
      expectation(expect(transform(parent)));
    });
  }
};

describe("appendTag", () => testRunner(tests));
