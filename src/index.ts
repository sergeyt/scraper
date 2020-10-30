import isNil from "lodash/isNil";
import forEach from "lodash/forEach";
import mapValues from "lodash/mapValues";
import { strip } from "./utils";

import wordnik from "./sources/wordnik";
import macmillan from "./sources/macmillan";
import forvo from "./sources/forvo";
import { makeCheerioEngine } from "./cheerio";
import { IEngine } from "./types";

const sources = [wordnik, macmillan, forvo];

async function parse(source, root: IEngine, query) {
  const data = {};

  const ensureSet = (key) => {
    if (key && !data[key]) {
      data[key] = new Set();
    }
  };

  const collect = async (key, item, extract) => {
    ensureSet(key);
    const content = key ? data[key] : undefined;
    const elements = await root.$$(item.selector);
    for (const element of elements) {
      const values = await extract(item, element);
      if (!Array.isArray(values)) {
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
    }
  };

  const term_handler = async (item, elem) => {
    const text = strip(await elem.textContent());
    if (!text) {
      return undefined;
    }
    if (item.exclude && item.exclude.includes(text)) {
      return undefined;
    }
    return [text];
  };

  const get_values = async (elem, commands) => {
    const results = [];
    for (const cmd of commands) {
      if (cmd.startsWith("@")) {
        const val = await elem.getAttribute(cmd.substr(1));
        results.push(val);
      } else {
        const val = strip(await elem.text());
        results.push(val);
      }
    }
    return results;
  };

  const audio_handler = async (item, elem) => {
    return await get_values(elem, item.audio);
  };

  const visual_handler = async (item, elem) => {
    return await get_values(elem, item.visual);
  };

  const parse_handler = (item, elem) => item.parse(elem);

  for (const item of source.plan) {
    if (item.term) {
      await collect(item.term, item, term_handler);
    } else if (item.audio) {
      await collect("audio", item, audio_handler);
    } else if (item.visual) {
      await collect("visual", item, visual_handler);
    } else if (item.parse) {
      await collect(undefined, item, parse_handler);
    }
  }

  return {
    source: { name: source.name, url: source.url },
    data: mapValues(data, (v) => Array.from(v)),
  };
}

function makeParser(source) {
  return async (text, lang) => {
    // TODO auto detect lang
    const query = { text, lang: lang || "en" };
    const url = source.makeUrl(query);

    try {
      const engine = await makeCheerioEngine(url);
      const results = parse(source, engine, query);
      return results;
    } catch (error) {
      console.log("error", source.name, error);
      return { error };
    }
  };
}

const parsers = sources.map(makeParser);

export function fetchData(text: string, lang?: string) {
  return Promise.all(parsers.map((fn) => fn(text, lang)));
}
