import { fetchData } from "../index";

describe("scraper", () => {
  it("can scrap apple", (done) => {
    fetchData("apple").then((results) => {
      console.log(JSON.stringify(results, null, '  '));
      done();
    });
  });
});
