export type TProgramResult =
  | {
      success: false;
      error: Error;
    }
  | {
      success: true;
    };
