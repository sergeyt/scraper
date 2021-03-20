const map = require("lodash/map");
import { Source } from "../types";

const header = "div.page div.dictionary div.pos-header";
const body = "div.page div.dictionary div.pos-body";

const dictionaries = {
  ru: "english-russian",
  fr: "english-french",
  de: "english-german",
};

function makeUrl(text: string, dictionary: string) {
  const t = encodeURIComponent(text.replace(" ", "-"));
  return `/dictionary/${dictionary}/${t}`;
}

// TODO handle different languages
const cambridge: Source = {
  type: "universal",
  name: "Cambridge Dictionary",
  url: "https://dictionary.cambridge.org",
  makePages: ({ text, lang }) => [
    {
      url: makeUrl(text, "english"),
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
          splitter: ",",
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
    },
    ...map(dictionaries, (d, lang) => ({
      url: makeUrl(text, d),
      plan: [
        {
          selector: `.sense-body .trans`,
          term: `translated_as@${lang}`,
          splitter: ",",
        },
      ],
    })),
  ],
};

export default cambridge;
