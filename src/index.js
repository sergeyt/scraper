import fetch from "isomorphic-unfetch";
import cheerio from "cheerio";
import isArray from "lodash/isArray";
import isNil from "lodash/isNil";
import forEach from "lodash/forEach";
import mapValues from "lodash/mapValues";
import { strip } from "./utils";

import macmillan from "./sources/macmillan";
import forvo from "./sources/forvo";

function isNode() {
  return (
    Object.prototype.toString.call(
      typeof process !== "undefined" ? process : 0
    ) === "[object process]"
  );
}

function isBrowser() {
  return !isNode() && typeof window !== "undefined";
}

const IS_BROWSER = isBrowser();
const sources = [macmillan, forvo];

function parse(source, html, query) {
  const $ = cheerio.load(html);
  const data = {};

  const ensureSet = (key) => {
    if (key && !data[key]) {
      data[key] = new Set();
    }
  };

  const collect = (key, item, extract) => {
    ensureSet(key);
    const content = key ? data[key] : undefined;
    $(item.selector).each((i, elem) => {
      const values = extract(item, $(elem));
      if (!isArray(values)) {
        return;
      }
      for (const val of values.filter((v) => !isNil(v) && v !== "")) {
        if (content) {
          content.add(val);
        } else {
          forEach(val, (v, k) => {
            ensureSet(k);
            data[k].add(v);
          });
        }
      }
    });
  };

  const term_handler = (item, elem) => {
    const text = strip(elem.text());
    if (!text) {
      return undefined;
    }
    if (item.exclude && item.exclude.includes(text)) {
      return undefined;
    }
    return [text];
  };

  const audio_handler = (item, elem) => {
    return item.audio.map((cmd) => {
      if (cmd.startsWith("@")) {
        return elem.attr(cmd.substr(1));
      }
      return strip(elem.text());
    });
  };

  const parse_handler = (item, elem) => item.parse(elem);

  for (const item of source.plan) {
    if (item.term) {
      collect(item.term, item, term_handler);
    } else if (item.audio) {
      collect("audio", item, audio_handler);
    } else if (item.parse) {
      collect(undefined, item, parse_handler);
    }
  }

  return {
    source: { name: source.name, url: source.url },
    data: mapValues(data, (v) => [...v]),
  };
}

function makeParser(source) {
  return (text, lang) => {
    // TODO auto detect lang
    const query = { text, lang: lang || "en" };
    let url = source.makeUrl(query);

    if (IS_BROWSER) {
      url = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
    }

    return fetch(url, {
      headers: {
        "User-Agent": "lingua-bot",
        Accept: "text/html,application/xhtml+xml",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.text();
        }
        throw new Error(resp.statusText);
      })
      .then((html) => {
        return parse(source, html, query);
      })
      .catch((error) => {
        console.log("error", source.name, error);
        return { error };
      });
  };
}

const parsers = sources.map(makeParser);

export function fetchData(text, lang) {
  return Promise.all(parsers.map((fn) => fn(text, lang)));
}
