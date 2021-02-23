import _ from "lodash";
import { unparse } from "papaparse";
import { Source } from "../types";
import { makeParser } from "../parse";

function fix(s: string) {
  s = _.trimEnd(s);
  return s.replace(/-/g, "");
}

const source: Source = {
  type: "text",
  name: "gender-decoder",
  url: "http://gender-decoder.katmatfield.com",
  makeUrl: () => "/about",
  plan: [
    {
      selector: "#masculine li",
      term: "masculine",
      map: fix,
    },
    {
      selector: "#feminine li",
      term: "feminine",
      map: fix,
    },
  ],
};

describe("gender-decoder words", () => {
  it("extract", async (done) => {
    const parser = makeParser(source);
    const results = await parser({ text: "" });
    const data = results[0].data;
    const records = [];
    const n = Math.max(data.masculine.length, data.feminine.length);
    for (let i = 0; i < n; i++) {
      const m = data.masculine[i];
      const f = data.feminine[i];
      const rec: any = {};
      if (m) {
        rec.masculine = m;
      }
      if (f) {
        rec.feminine = f;
      }
      records.push(rec);
    }
    const csv = unparse(records);
    console.log(csv);
    done();
  });
});
