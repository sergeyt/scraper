import { Source } from "../types";

const unsplash: Source = {
  type: "visual",
  name: "unsplash",
  url: "https://unsplash.com",
  makeUrl({ text }): string {
    const txt = text.replace(" ", "-");
    return `/s/photos/${txt}`;
  },
  plan: [
    {
      selector: `div[data-test="search-photos-route"] figure img`,
      exclude: ["^https://images.unsplash.com/profile-"],
      visual: ["@src"],
    },
  ],
};

export default unsplash;
