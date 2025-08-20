export const views = [
  "home",
  "search",
  "archive",
  "tag",
  "settings",
  "noteBody",
] as const;

export type View = (typeof views)[number];
