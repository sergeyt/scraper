import { Source } from "../types";
import { makeParser } from "../index";

const source: Source = {
  type: "text",
  name: "russian-lessions",
  url: "http://www.russianlessons.net",
  makeUrl: () => "/vocabulary/countries.php",
  plan: [
    {
      selector: "article p.nobreak",
      parse: async (elem) => {
        const rus = (await elem.$$("span.rus"))[0];
        const eng = (await elem.$$("span.eng"))[0];
        if (!rus || !eng) {
          return undefined;
        }
        const rusText = await rus.textContent();
        const engText = await eng.textContent();
        if (!rusText || !engText) {
          return undefined;
        }
        return [{ pair: [rusText.toLowerCase(), engText.toLowerCase()] }];
      },
    },
  ],
};

describe("russian countries", () => {
  xit("extract from russian lessons", async (done) => {
    const parser = makeParser(source);
    const results = await parser({ text: "" });
    const text = JSON.stringify(results[0].data.pair, null, "  ");
    console.log(text);
    done();
  });
});
