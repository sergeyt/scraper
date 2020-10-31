import { Source, Query } from "../types";

const howjsay: Source = {
  type: "audio",
  name: "howjsay",
  url: "https://howjsay.com/mp3",
  async getData({ text }: Query): Promise<any> {
    const url = `https://howjsay.com/mp3/${encodeURIComponent(text)}.mp3`;
    // TODO check url exists
    return {
      audio: [{ url }],
    };
  },
};

export default howjsay;
