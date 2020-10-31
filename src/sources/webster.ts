import { Source } from "../types";

const webster: Source = {
  type: "universal",
  name: "merriam-webster",
  url: "https://www.merriam-webster.com",
  makeUrl: ({ text }) => `/dictionary/${encodeURIComponent(text)}`,
  plan: [
    {
      selector: "span.prs a.play-pron",
      audio: async (btn) => {
        const lang = (await btn.getAttribute("data-lang")).replace("_", "/");
        const dir = await btn.getAttribute("data-dir");
        const file = await btn.getAttribute("data-file");
        return `https://media.merriam-webster.com/audio/prons/${lang}/mp3/${dir}/${file}.mp3`;
      },
    },
    {
      selector: "span.prs span.pr",
      term: "transcription",
    },
    {
      selector: "div.vg .dt",
      term: "definition",
      lstrip: ":",
    },
    {
      selector: ".ex-sent.t",
      term: "in",
    },
    {
      selector: ".ure",
      term: "related",
    },
    {
      selector: "span.fl",
      term: "tag",
    },
  ],
};

export default webster;
