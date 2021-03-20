import { fetchData } from "../parse";
import compromise from "../sources/compromise";
import macmillan from "../sources/macmillan";

describe("scraper", () => {
  it("can scrap apple", async (done) => {
    const results = await fetchData({ text: "apple" });
    console.log(JSON.stringify(results, null, "  "));
    done();
  }, 30000);

  xit("debug compromise", async (done) => {
    const results = await fetchData(
      { text: "apple" },
      {
        sources: [compromise],
      }
    );
    console.log(JSON.stringify(results, null, "  "));
    done();
  }, 30000);

  xit("debug macmillan", async (done) => {
    const results = await fetchData(
      { text: "when" },
      {
        sources: [macmillan],
      }
    );
    console.log(JSON.stringify(results, null, "  "));
    done();
  }, 30000);
});
