export type TActionResult =
  | {
      success: false;
      reason: unknown;
    }
  | {
      success: true;
    };
