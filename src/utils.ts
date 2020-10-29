import trim from "lodash/trim";

export function strip(s?: string) {
  return trim(s?.trim(), "\u200b");
}
