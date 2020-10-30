import { fetchData } from "../index";

describe("scraper", () => {
  it("can scrap apple", async () => {
    const results = await fetchData("apple");
    console.log(JSON.stringify(results, null, '  '));
  });
});
