import fs from "fs";
import path from "path";
import _ from "lodash";
import { makeParser } from "../..";
import { Source } from "../../types";

const wikipedia: Source = {
  type: "text",
  name: "simple.wikipedia",
  url: "https://simple.wikipedia.org",
  makeUrl: () => "/wiki/Wikipedia:Basic_English_alphabetical_wordlist",
  plan: [
    {
      selector: "#mw-content-text p a",
      term: "text",
    },
  ],
};

const ogden: Source = {
  type: "text",
  name: "ogden",
  url: "http://ogden.basic-english.org",
  makeUrl: () => "/wordcat.html",
  plan: [
    {
      selector: "li",
      obj: {
        key: "categories",
        plan: {
          name: {
            selector: "a[name]",
            term: "name",
          },
          words: {
            selector: "#text",
            term: "words",
          },
        },
      },
    },
  ],
};

describe("basic english word list", () => {
  it("from wikipedia", async () => {
    const parser = makeParser(wikipedia);
    const results = await parser({ text: "" });
    const words = results[0].data.text.filter(isWord);
    dump("wikipedia-words.txt", words.join("\n"));
    console.log(JSON.stringify(words, null, "  "));
  });

  it("from odgen", async () => {
    const parser = makeParser(ogden);
    const results = await parser({ text: "" });
    let count = 0;
    const categories = results[0].data.categories.map((c) => {
      const name = _.trim(_.trimEnd(c.name[0], ":"));
      let words = c.words;
      if (name === "Mathematics") {
        const i = words.findIndex((s) => s.startsWith("Back to :"));
        if (i >= 0) {
          words = words.slice(0, i);
        }
      }
      words = _.flattenDeep(words.map(splitWords));
      count += words.length;
      return { name, words };
    });
    // taken from https://github.com/earonesty/dotfiles/blob/master/frequent.js
    const freq = require("../freq.json");
    const ranked = categories.map((c) => ({
      name: c.name,
      words: c.words.map((w) => {
        const f = freq[w];
        return {
          text: w,
          freq: _.isUndefined(f) ? undefined : f,
        };
      }),
    }));
    const json = JSON.stringify(ranked, null, "  ");
    dump("ogden-categories.json", json + "\n");
    console.log(count);
    console.log(json);
  });
});

function dump(name: string, content: string) {
  fs.writeFileSync(path.resolve(__dirname, name), content);
}

function isWord(s: string) {
  return /^\w+$/.test(s);
}

function splitWords(s: string) {
  const a = s.split(":");
  if (a.length === 2) {
    s = _.trim(a[1]);
  }
  return Array.from(s.matchAll(/\w+/g));
}
