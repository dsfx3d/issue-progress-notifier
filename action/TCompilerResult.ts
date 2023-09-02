export type TCompilerResult =
  | {
      failed: true;
      reason: unknown;
    }
  | {
      failed: false;
      template: string;
    };
