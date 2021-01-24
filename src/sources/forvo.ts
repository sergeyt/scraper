const trimEnd = require("lodash/trimEnd");
const trimStart = require("lodash/trimStart");
const isEmpty = require("lodash/isEmpty");
import { Base64 } from "js-base64";
import { strip } from "../utils";
import { IElement, Source } from "../types";
import { translate as translate_country } from "../data/rucountries";

const AUDIO_HOST = "https://audio00.forvo.com/audios/mp3";
const encode = encodeURIComponent;

function unquote(s) {
  if (s && s.startsWith("'")) {
    return s.substr(1, s.length - 2);
  }
  return s;
}

function parse_fn(src) {
  if (!src) {
    return undefined;
  }
  const i = src.indexOf("(");
  const j = src.indexOf(")");
  const name = src.substr(0, i);
  const a = src.substr(i + 1, j - i - 1).split(",");
  const args = a.map(unquote);
  return { name, args };
}

function translate_gender(val) {
  val = strip(val);
  if (val === "\u0436\u0435\u043d\u0449\u0438\u043d\u0430") {
    return "f";
  }
  if (val === "\u043c\u0443\u0436\u0447\u0438\u043d\u0430") {
    return "m";
  }
  return val;
}

function parse_from(s) {
  if (!s) {
    return undefined;
  }
  s = trimEnd(trimStart(s, "("), ")");
  const a = s.split(",");
  if (isEmpty(a)) {
    return undefined;
  }
  const result: any = { gender: translate_gender(a[0]) };
  if (a.length === 2) {
    result.country = translate_country(a[1]);
  }
  return result;
}

const forvo: Source = {
  type: "audio",
  name: "forvo",
  url: "https://forvo.com",
  makeUrl: ({ text, lang }) =>
    `https://ru.forvo.com/word/${encode(text)}/#${lang}`,
  plan: [
    {
      selector: "article.pronunciations ul.show-all-pronunciations li",
      parse: async (elem: IElement) => {
        const btn = (await elem.querySelectorAll("span.play"))[0];
        if (!btn) {
          return undefined;
        }
        const fn = parse_fn(await btn.getAttribute("onclick"));
        if (!fn || fn.name !== "Play") {
          return undefined;
        }
        const rel = Base64.decode(fn["args"][4]);
        const url = `${AUDIO_HOST}/${rel}`;
        if (!url.endsWith(".mp3")) {
          return undefined;
        }

        const result: any = { url };

        const author = (await elem.querySelectorAll("span.ofLink"))[0];
        if (author) {
          const val = await author.getAttribute("data-p2");
          if (val) {
            result.author = val;
          }
        }

        const from = (await elem.querySelectorAll("span.from"))[0];
        if (from) {
          const d = parse_from(await from.textContent());
          if (d) {
            Object.assign(result, d);
          }
        }

        return [{ audio: result }];
      },
    },
  ],
};

export default forvo;
