const trim = require("lodash/trim");

export function strip(s?: string) {
  return trim(s?.trim(), "\u200b");
}

function isNode() {
  return (
    Object.prototype.toString.call(
      typeof process !== "undefined" ? process : 0
    ) === "[object process]"
  );
}

function isBrowser() {
  return !isNode() && typeof window !== "undefined";
}

export const IS_BROWSER = isBrowser();

export function splitBy(s: string, by?: string): string[] {
  let splitter: any;
  switch (by) {
    case ",":
      splitter = /,/g;
      break;
    default:
      splitter = /\s/g;
      break;
  }
  return (s || "")
    .split(splitter)
    .map((t) => trim(t))
    .filter((t) => !!t);
}
