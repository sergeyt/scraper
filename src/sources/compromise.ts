import * as _ from "lodash";
import nlp from "compromise";
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
    const tag = _.flatten(
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
