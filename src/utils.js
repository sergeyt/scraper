import trim from "lodash/trim";

export function strip(s) {
  return trim(s?.trim(), "\u200b");
}
