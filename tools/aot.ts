import _ from "lodash";
import fs from "fs";
import path from "path";
import { fetchData } from "../src/parse";
import { ogden } from "../src/data/ogden";
import { dolch } from "../src/data/dolch";

async function main() {
  const words = _.uniq(
    ogden.categories
      .flatMap((t) => t.words)
      .concat(dolch.categories.flatMap((t) => t.words))
      .map((t) => t.text)
  );
  await Promise.all(
    words.map(async (text) => {
      const data = fetchData({ text });
      await fs.promises.appendFile(
        path.resolve(__dirname, "../data.jsonld"),
        JSON.stringify(data) + "\n",
        "utf-8"
      );
    })
  );
}

main().catch(console.error);
