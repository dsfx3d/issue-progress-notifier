import {ReaderTask} from "fp-ts/lib/ReaderTask";

export type TCompilerTask<TProp> = ReaderTask<TProp, string>;
