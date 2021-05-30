import _ from "lodash";
import { Low, JSONFile } from "lowdb";
import pSeries from "p-series";
import { fetchData, ogden, dolch } from "lingua-scraper";

async function main() {
  const words = _.uniq(
    ogden.categories
      .flatMap((t) => t.words)
      .concat(dolch.categories.flatMap((t) => t.words))
      .map((t) => t.text)
  );
  type DbShape = {
    words: {
      text?: string;
      data?: any;
    };
  };
  const dbFile = process.argv[2] || "./db.json";
  const db = new Low(new JSONFile<DbShape>(dbFile));
  await db.read();
  db.data ||= { words: {} };
  const tasks = words.map((text, index) => async () => {
    try {
      const data = await fetchData({ text });
      db.data.words[text] = data;
      if ((index + 1) % 10 === 0) {
        await db.write();
      }
    } catch (err) {
      console.log(`fetch '${text}' fail:`, err);
    }
  });
  await pSeries(tasks);
  await db.write();
  process.exit();
}

main().catch(console.error);
