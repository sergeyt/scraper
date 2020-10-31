import fetch from "isomorphic-unfetch";
import cheerio from "cheerio";
import { IElement, IEngine } from "./types";
import { IS_BROWSER } from "./utils";

class CheerioElement implements IElement {
  $: cheerio.Root;
  elem: cheerio.Cheerio;

  constructor($: cheerio.Root, elem: cheerio.Cheerio) {
    this.$ = $;
    this.elem = elem;
  }

  async $$(selector: string): Promise<IElement[]> {
    const $ = this.elem.find(selector);
    const result = [];
    $.each((i, elem) => {
      result.push(new CheerioElement(this.$, this.$(elem)));
    });
    return result;
  }

  async getAttribute(name: string): Promise<string> {
    return this.elem.attr(name);
  }

  async textContent(): Promise<string> {
    return this.elem.text();
  }
}

class CheerioEngine implements IEngine {
  $: cheerio.Root;

  constructor(html: string) {
    this.$ = cheerio.load(html);
  }

  $$(selector: string): Promise<IElement[]> {
    const $ = this.$(selector);
    const result = [];
    $.each((i, elem) => {
      result.push(new CheerioElement(this.$, this.$(elem)));
    });
    return Promise.resolve(result);
  }

  close(): Promise<void> {
    return Promise.resolve(undefined);
  }
}

export async function makeCheerioEngine(url: string): Promise<IEngine> {
  if (IS_BROWSER) {
    url = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
  }

  const resp = await fetch(url, {
    headers: {
      "User-Agent": "lingua-bot",
      Accept: "text/html,application/xhtml+xml",
    },
  });

  if (!resp.ok) {
    throw new Error(resp.statusText);
  }

  const html = await resp.text();
  return new CheerioEngine(html);
}
