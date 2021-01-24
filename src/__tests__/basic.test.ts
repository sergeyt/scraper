import { fetchData } from "../parse";

describe("scraper", () => {
  it("can scrap apple", async (done) => {
    const results = await fetchData({ text: "apple" });
    console.log(JSON.stringify(results, null, "  "));
    done();
  }, 30000);
});
