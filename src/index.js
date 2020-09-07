import fetch from "isomorphic-unfetch";
import cheerio from "cheerio";
import trim from "lodash/trim";
import isArray from "lodash/isArray";
import isNil from "lodash/isNil";

import macmillan from "./sources/macmillan";

function strip(s) {
  return trim(s?.trim(), "\u200b");
}

function parse(source, html, query) {
  const $ = cheerio.load(html);
  const data = {};

  const collect = (key, item, extract) => {
    if (!data[key]) {
      data[key] = [];
    }
    const content = new Set(data[key]);
    $(item.selector).each((i, elem) => {
      const values = extract(item, $(elem));
      if (!isArray(values)) {
        return;
      }
      for (const val of values.filter((v) => !isNil(v) && v !== "")) {
        content.add(val);
      }
    });
    data[key] = [...content];
  };

  const term = (item, elem) => {
    const text = strip(elem.text());
    if (!text) {
      return undefined;
    }
    if (item.exclude && item.exclude.includes(text)) {
      return undefined;
    }
    return [text];
  };

  const audio = (item, elem) => {
    return item.audio.map((cmd) => {
      if (cmd.startsWith("@")) {
        return elem.attr(cmd.substr(1));
      }
      return strip(elem.text());
    });
  };

  for (const item of source.plan) {
    if (item.term) {
      collect(item.term, item, term);
    } else if (item.audio) {
      collect("audio", item, audio);
    }
  }

  return {
    source: source.name,
    data,
  };
}

function makeParser(source) {
  return (text, lang) => {
    // TODO auto detect lang
    const query = { text, lang: lang || "en" };
    const url = source.url(query);
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

const parsers = [macmillan].map(makeParser);

export function fetchData(text, lang) {
  return Promise.all(parsers.map((fn) => fn(text, lang)));
}
