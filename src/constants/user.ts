export const MIN_AGE = 1;
export const MAX_AGE = 100;
export const DEFAULT_AGE = 10;

export const AGE_OPTIONS = Array.from(
  { length: MAX_AGE - MIN_AGE + 1 },
  (_, i) => MIN_AGE + i,
);
