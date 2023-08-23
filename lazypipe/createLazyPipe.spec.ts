import {Reader} from "fp-ts/lib/Reader";
import {TStage} from "./TStage";
import {createLazyPipe} from "./createLazyPipe";
import {matchE} from "fp-ts/lib/TaskEither";
import {of} from "fp-ts/lib/Task";
import {pipe} from "fp-ts/lib/function";

const error = new Error("Failed stage");

const tests: [
  string,
  number,
  TStage<number>[],
  Reader<jest.JestMatchers<unknown>, void>,
][] = [
  [
    "processes all stages successfully and returns the expected value",
    5,
    [input => Promise.resolve(input + 1), input => Promise.resolve(input * 2)],
    matcher => matcher.resolves.toEqual(12),
  ],
  [
    "returns an error if one of the stages encounters an error",
    5,
    [input => Promise.resolve(input + 1), () => Promise.reject(error)],
    matcher => matcher.resolves.toBe(error),
  ],
];

const testRunner = (
  title: string,
  input: number,
  stages: TStage<number>[],
  assertion: (matcher: jest.JestMatchers<unknown>) => void,
) =>
  it(title, () => {
    const pipeline = createLazyPipe(...stages);
    const result = pipe(pipeline(input), matchE(of, of))();
    assertion(expect(result));
  });

describe("createLazyPipe", () => {
  for (const [title, input, stages, assertion] of tests) {
    testRunner(title, input, stages, assertion);
  }
});
