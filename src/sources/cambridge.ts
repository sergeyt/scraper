import { Source } from "../types";

const header = "div.page div.dictionary div.pos-header";
const body = "div.page div.dictionary div.pos-body";

// TODO get translations
const cambridge: Source = {
  type: "universal",
  name: "cambridge",
  url: "https://dictionary.cambridge.org",
  makeUrl: ({ text }) => {
    const txt = text.replace(" ", "-");
    return `/dictionary/english/${txt}`;
  },
  plan: [
    {
      // TODO extract region too
      selector: `${header} span.dpron-i amp-audio source`,
      audio: ["@src"],
    },
    {
      selector: `${header} span.dpron-i span.ipa`,
      term: "transcription",
    },
    {
      selector: `${header} .posgram .pos`,
      term: "tag",
    },
    {
      selector: `${header} .posgram .gram .gc`,
      term: "tag",
      map: (c) => {
        const codes = {
          C: "countable",
          U: "uncountable",
          S: "singular",
        };
        return codes[c] || undefined;
      },
    },
    {
      selector: `${body} div.def-block div.def`,
      term: "definition",
    },
    {
      selector: `${body} div.def-block amp-img`,
      visual: ["@src"],
    },
    {
      selector: `${body} div.def-block span.eg`,
      term: "in",
    },
    {
      selector: "div.page div.dataset span.deg",
      term: "in",
    },
    {
      selector: "div.page div.dataset div.cpegs div.lbb a.hdib",
      term: "collocation",
    },
  ],
};

export default cambridge;
