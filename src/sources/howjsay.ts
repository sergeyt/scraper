import { Source } from "../types";

const howjsay: Source = {
  type: "audio",
  name: "howjsay",
  url: "https://howjsay.com",
  makeUrl: ({ text }) => `/mp3/${encodeURIComponent(text)}.mp3`,
  async getData(url): Promise<any> {
    // TODO check url exists
    return {
      audio: [{ url }],
    };
  },
};

export default howjsay;
