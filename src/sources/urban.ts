const trimEnd = require("lodash/trimEnd");
const trimStart = require("lodash/trimStart");
import { Source } from "../types";

const urban: Source = {
  type: "universal",
  name: "urban-dictionary",
  url: "https://www.urbandictionary.com",
  makeUrl: ({ text }) => `/define.php?term=${encodeURIComponent(text)}`,
  plan: [
    {
      selector: "#content div.def-panel a.play-sound",
      audio: ["@data-urls"],
      map: (s) => trimEnd(trimStart(s, `["`), `"]`),
    },
    {
      selector: "#content div.def-panel div.meaning",
      term: "definition",
    },
  ],
};

export default urban;
