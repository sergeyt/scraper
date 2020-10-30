export default {
  name: "wordnik",
  url: "https://www.wordnik.com",
  makeUrl: ({ text }) => `https://www.wordnik.com/words/${text}`,
  plan: [
    {
      selector: ".flickr-module .thumbs img",
      visual: ["@src"],
    },
  ],
};
