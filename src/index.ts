import isNil from "lodash/isNil";
import forEach from "lodash/forEach";
import mapValues from "lodash/mapValues";
import { strip } from "./utils";

import unsplash from "./sources/unsplash";
import wordnik from "./sources/wordnik";
import macmillan from "./sources/macmillan";
import forvo from "./sources/forvo";
import howjsay from "./sources/howjsay";
import { IEngine, Source, Query, SourceType } from "./types";
import { makeEngine } from "./factory";

export const sources = [unsplash, wordnik, macmillan, forvo, howjsay];

async function parse(source: Source, root: IEngine, query) {
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
        continue;
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

  const is_excluded = (item, val: string) => {
    if (item.exclude) {
      return item.exclude.some((s: string) => {
        if (s.startsWith("^")) {
          return val.startsWith(s.substr(1));
        }
        return val === s;
      });
    }
    return false;
  };

  const term_handler = async (item, elem) => {
    const val = strip(await elem.textContent());
    if (!val) {
      return undefined;
    }
    if (is_excluded(item, val)) {
      return undefined;
    }
    return [val];
  };

  const get_values = async (item, elem, commands) => {
    const results = [];
    for (const cmd of commands) {
      let val: string;
      if (cmd.startsWith("@")) {
        val = await elem.getAttribute(cmd.substr(1));
      } else {
        val = strip(await elem.text());
      }
      if (is_excluded(item, val)) {
        continue;
      }
      results.push(val);
    }
    return results.length === 0 ? undefined : results;
  };

  const audio_handler = async (item, elem) => {
    return await get_values(item, elem, item.audio);
  };

  const visual_handler = async (item, elem) => {
    return await get_values(item, elem, item.visual);
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

function makeParser(source: Source) {
  return async ({ text, lang }: Query) => {
    // TODO auto detect lang
    const query = { text, lang: lang || "en" };
    if (source.getData) {
      try {
        const data = await source.getData(query);
        return { source: { name: source.name, url: source.url }, data };
      } catch (error) {
        console.log("error", source.name, error);
        return { source: { name: source.name, url: source.url }, error };
      }
    }

    let url = source.makeUrl(query);
    if (url.startsWith("/")) {
      url = source.url + url;
    }

    try {
      const engine = await makeEngine(source.engine, url);
      const results = parse(source, engine, query);
      return results;
    } catch (error) {
      console.log("error", source.name, error);
      return { source: { name: source.name, url: source.url }, error };
    }
  };
}

type Options = {
  type?: SourceType;
  sources?: Source[];
};

export function fetchData(query: Query, options: Options = {}) {
  const src =
    options.sources ||
    sources.filter((s) => {
      if (options.type) {
        return s.type === options.type;
      }
      return true;
    });
  return Promise.all(src.map(makeParser).map((fn) => fn(query)));
}
