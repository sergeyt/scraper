import { readCoca60k } from ".";

describe("coca", () => {
  it("read file", async () => {
    await readCoca60k();
  });
});
