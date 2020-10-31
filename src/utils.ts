import _ from "lodash";

export function strip(s?: string) {
  return _.trim(s?.trim(), "\u200b");
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
