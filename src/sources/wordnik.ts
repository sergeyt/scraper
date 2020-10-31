import { Source } from "../types";

const wordnik: Source = {
  engine: "playwright",
  name: "wordnik",
  url: "https://www.wordnik.com",
  makeUrl: ({ text }) => `/words/${text}`,
  plan: [
    {
      selector: ".flickr-module .thumbs img",
      visual: ["@src"],
    },
  ],
};

export default wordnik;
