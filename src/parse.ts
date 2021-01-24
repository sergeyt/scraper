const forEach = require("lodash/forEach");
const isArray = require("lodash/isArray");
const isString = require("lodash/isString");
const isNil = require("lodash/isNil");
const mapValues = require("lodash/mapValues");
const isEmpty = require("lodash/isEmpty");
const flatten = require("lodash/flatten");
import { strip } from "./utils";

import unsplash from "./sources/unsplash";
//import wordnik from "./sources/wordnik";
import macmillan from "./sources/macmillan";
import forvo from "./sources/forvo";
import howjsay from "./sources/howjsay";
import webster from "./sources/webster";
import cambridge from "./sources/cambridge";
import urban from "./sources/urban";

import {
  Source,
  Query,
  SourceType,
  SourceMeta,
  ExecutionPlan,
  IElement,
} from "./types";
import { makeEngine } from "./factory";

export const sources: Source[] = [
  unsplash,
  //wordnik,
  webster,
  macmillan,
  cambridge,
  urban,
  forvo,
  howjsay,
];

function takeMeta(source: Source): SourceMeta {
  return {
    type: source.type,
    name: source.name,
    url: source.url,
  };
}

type Data = {
  audio: any[];
  visual: any[];
  definition: any[];
  [other: string]: any[];
};

type ParseResult = {
  source: SourceMeta;
  data?: Data;
  error?: any;
};

async function executePlanImpl(
  root: IElement,
  plan: ExecutionPlan[]
): Promise<Data> {
  const data = {};

  const ensureSet = (key) => {
    if (key && !data[key]) {
      data[key] = new Set();
    }
  };

  const collect = async (key, item, extract) => {
    ensureSet(key);
    const content = key ? data[key] : undefined;
    const elements = await root.querySelectorAll(item.selector);
    for (const element of elements) {
      const values = await extract(item, element);
      if (!isArray(values)) {
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
    let val = strip(await elem.textContent());
    if (!val) {
      return undefined;
    }
    if (is_excluded(item, val)) {
      return undefined;
    }
    if (item.lstrip && val.startsWith(item.lstrip)) {
      val = strip(val.substr(item.lstrip.length));
    }
    if (!val) {
      return undefined;
    }
    if (item.map) {
      val = item.map(val);
    }
    if (!val) {
      return undefined;
    }
    return [val];
  };

  const get_values = async (item, elem, commands) => {
    const results = [];
    if (isArray(commands)) {
      for (const cmd of commands) {
        let val: string;
        if (isString(cmd)) {
          if (cmd.startsWith("@")) {
            val = await elem.getAttribute(cmd.substr(1));
          } else {
            val = strip(await elem.text());
          }
        } else {
          val = await cmd(elem);
        }
        if (is_excluded(item, val)) {
          continue;
        }
        if (item.map) {
          val = item.map(val);
        }
        if (!val) {
          continue;
        }
        results.push(val);
      }
    } else {
      let val = await commands(elem);
      if (!is_excluded(item, val)) {
        if (item.map) {
          val = item.map(val);
        }
        if (val) {
          results.push(val);
        }
      }
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

  for (const item of plan) {
    if (item.term) {
      await collect(item.term, item, term_handler);
    } else if (item.audio) {
      await collect("audio", item, audio_handler);
    } else if (item.visual) {
      await collect("visual", item, visual_handler);
    } else if (item.parse) {
      await collect(undefined, item, parse_handler);
    } else if (item.obj) {
      const elements = await root.querySelectorAll(item.selector);
      const results = await Promise.all(
        elements.map(async (elem) => {
          const items = await Promise.all(
            Object.keys(item.obj.plan).map(async (k) => {
              const p = item.obj.plan[k];
              return await executePlanImpl(elem, [p]);
            })
          );
          return items.reduce((a, b) => Object.assign(a, b), {});
        })
      );
      data[item.obj.key] = results;
    }
  }

  return mapValues(data, (v) => Array.from(v));
}

async function executePlan(
  root: IElement,
  plan: ExecutionPlan[],
  source: Source
): Promise<ParseResult> {
  const data = await executePlanImpl(root, plan);
  return { source, data };
}

async function processUrl(url: string, plan: ExecutionPlan[], source: Source) {
  const engine = await makeEngine(source.engine, url);
  const result = await executePlan(engine, plan, takeMeta(source));
  result.source.url = url;
  return result;
}

export function makeParser(source: Source) {
  return async ({ text, lang }: Query): Promise<ParseResult[]> => {
    // TODO auto detect lang
    const query = { text, lang: lang || "en" };

    if (source.makePages) {
      const results = await Promise.all(
        source.makePages(query).map((page) => {
          let url = page.url;
          if (url.startsWith("/")) {
            url = source.url + url;
          }
          return processUrl(url, page.plan, source);
        })
      );
      return results;
    }

    let url = source.makeUrl(query);
    if (url.startsWith("/")) {
      url = source.url + url;
    }

    if (source.getData) {
      try {
        const data = await source.getData(url, query);
        const result = { source: takeMeta(source), data };
        result.source.url = url;
        return [result];
      } catch (error) {
        console.log("error", source.name, error);
        return [{ source: takeMeta(source), error }];
      }
    }

    try {
      const result = await processUrl(url, source.plan, source);
      return [result];
    } catch (error) {
      console.log("error", source.name, error);
      return [{ source: takeMeta(source), error }];
    }
  };
}

type Options = {
  type?: SourceType;
  sources?: Source[];
  include?: string[]; // include only sources by name
  exclude?: string[]; // exclude sources by name
};

export function fetchData(query: Query, options: Options = {}) {
  const src =
    options.sources ||
    sources.filter((s) => {
      if (
        options.type &&
        !(s.type === options.type || s.type === "universal")
      ) {
        return false;
      }
      if (
        !isEmpty(options.include) &&
        !options.include.some(
          (name) => s.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        return false;
      }
      if (
        !isEmpty(options.exclude) &&
        options.exclude.some(
          (name) => s.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        return false;
      }
      return true;
    });
  return Promise.all(src.map(makeParser).map((fn) => fn(query))).then((a) =>
    flatten(a)
  );
}
