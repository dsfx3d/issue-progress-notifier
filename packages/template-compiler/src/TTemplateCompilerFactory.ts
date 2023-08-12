import {Reader} from "fp-ts/lib/Reader";
import {ReaderTask} from "fp-ts/ReaderTask";
export type TTemplateCompilerFactory<T> = Reader<
  Reader<T, string>,
  ReaderTask<T, string>
>;
