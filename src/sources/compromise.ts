import nlp from "compromise";
const flatten = require("lodash/flatten");
import { Source, Query } from "../types";

const compromise: Source = {
  type: "text",
  name: "Compromise Lexicon",
  url: "http://compromise.cool",
  makeUrl(): string {
    return "/";
  },
  async getData(url: string, query?: Query) {
    const doc = nlp(query.text);
    const tag = flatten(
      doc.list.map((p) => {
        const terms = p.terms();
        return terms.map((t) => {
          return Object.keys(t.tags);
        });
      })
    );
    return { tag };
  },
};

export default compromise;
