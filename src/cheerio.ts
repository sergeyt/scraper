const { fetch } = require("fetch-ponyfill")();
const cheerio = require("cheerio");
import { IElement, IEngine } from "./types";
import { IS_BROWSER } from "./utils";

function makeElements(
  $: cheerio.Root,
  found: cheerio.Cheerio,
  filter: (e: cheerio.Element) => boolean = () => true
): IElement[] {
  const result = [];
  found.each((i, elem) => {
    if (!filter(elem)) {
      return;
    }
    result.push(new CheerioElement($, $(elem)));
  });
  return result;
}

class CheerioElement implements IElement {
  $: cheerio.Root;
  elem: cheerio.Cheerio;

  constructor($: cheerio.Root, elem: cheerio.Cheerio) {
    this.$ = $;
    this.elem = elem;
  }

  querySelectorAll(selector: string): Promise<IElement[]> {
    return Promise.resolve(this.querySelectorAllImpl(selector));
  }

  querySelectorAllImpl(selector: string): IElement[] {
    if (selector === "#children") {
      const children = this.elem.children();
      return makeElements(this.$, children);
    }
    if (selector === "#text") {
      const children = this.elem.contents();
      return makeElements(this.$, children, (e) => {
        return e.type === "text";
      });
    }
    return makeElements(this.$, this.elem.find(selector));
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

  querySelectorAll(selector: string): Promise<IElement[]> {
    const found = this.$(selector);
    return Promise.resolve(makeElements(this.$, found));
  }

  close(): Promise<void> {
    return Promise.resolve(undefined);
  }

  getAttribute(name: string): Promise<string> {
    return Promise.resolve("");
  }

  textContent(): Promise<string> {
    return Promise.resolve("");
  }
}

export async function makeCheerioEngine(url: string): Promise<IEngine> {
  if (IS_BROWSER) {
    url = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
  }

  const headers: any = {
    Accept: "text/html,application/xhtml+xml",
  };
  if (!IS_BROWSER) {
    headers["User-Agent"] = "lingua-bot";
  }

  const resp = await fetch(url, { headers });

  if (!resp.ok) {
    throw new Error(resp.statusText);
  }

  const html = await resp.text();
  return new CheerioEngine(html);
}
