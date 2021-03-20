import { Source } from "../types";

const macmillan: Source = {
  type: "universal",
  name: "Macmillan Dictionary",
  url: "https://www.macmillandictionary.com",
  makeUrl: ({ text }) => `/dictionary/british/${encodeURIComponent(text)}`,
  plan: [
    {
      selector: ".audio_play_button",
      audio: ["@data-src-mp3", "@data-src-ogg"],
    },
    {
      selector: ".PRON",
      term: "transcription",
    },
    {
      selector: ".PART-OF-SPEECH",
      term: "tag",
    },
    {
      selector: ".SYNTAX-CODING",
      term: "tag",
    },
    {
      selector: ".DEFINITION",
      term: "definition",
    },
    {
      selector: ".EXAMPLES",
      term: "in",
    },
    {
      selector: ".PHR-XREF",
      term: "in",
    },
    {
      selector: ".synonyms .theslink",
      exclude: ["..."],
      term: "synonym",
    },
  ],
};

export default macmillan;
