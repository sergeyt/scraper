import _ from "lodash";
// taken from https://github.com/earonesty/dotfiles/blob/master/frequent.js
const freq = require("./freq.json");

type Category = {
  name: string;
  words: string[];
};

export function order_by_freq(categories: Category[]) {
  return _.orderBy(
    categories.map((c) => ({
      name: c.name,
      words: _.orderBy(
        c.words.map((w) => {
          const f = freq[w];
          return {
            text: w,
            freq: _.isUndefined(f) ? 0 : f,
          };
        }),
        (t) => t.freq,
        "desc"
      ),
    })),
    (c) => _.sumBy(c.words, (t) => t.freq),
    "desc"
  );
}
