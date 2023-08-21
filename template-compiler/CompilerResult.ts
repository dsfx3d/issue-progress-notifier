export type CompilerResult =
  | {
      error: true;
      message: string;
    }
  | {
      error: false;
      result: string;
    };
