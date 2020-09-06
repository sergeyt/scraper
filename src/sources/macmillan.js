module.exports = {
  name: "macmillan",
  url: (q) => `https://www.macmillandictionary.com/dictionary/british/${q.text}`,
  plan: [
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
    {
      selector: ".audio_play_button",
      audio: ["@data-src-mp3", "@data-src-ogg"],
    },
  ],
};
