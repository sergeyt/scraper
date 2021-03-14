import _ from "lodash";
import fs from "fs";
import path from "path";
import isFloat from "validator/lib/isFloat";

type Record = {
  rank: number;
  lemma: string;
  PoS: string;
  freq: number;
  preMil: number;
  range: number;
};

type Index = {
  [lemma: string]: Record;
};

export async function readCoca60k(): Promise<Index> {
  const f = path.resolve(__dirname, "lemmas_60k.txt");
  const content = await fs.promises.readFile(f, "utf-8");
  const all_lines = split_lines(content);
  const i = all_lines.findIndex((t) => !t);
  const lines = all_lines.slice(i + 1);
  const keys = split_by_space(lines[0]);
  const records = lines
    .slice(1)
    .filter((s) => !!s)
    .map((s) => {
      const a = split_by_space(s);
      return keys.reduce((obj, k, i) => {
        const v = a[i];
        obj[k] = isFloat(v) ? +v : v;
        return obj;
      }, {} as any);
    });
  return records.reduce((m, r) => {
    m[r.lemma] = r;
    return m;
  }, {} as any);
}

function split_lines(content: string): string[] {
  return content.split(/\r\n|\r|\n/).map((s) => _.trim(s));
}

export function split_by_space(s: string): string[] {
  return (s || "")
    .split(/\s/g)
    .map((t) => _.trim(t))
    .filter((t) => !!t);
}
