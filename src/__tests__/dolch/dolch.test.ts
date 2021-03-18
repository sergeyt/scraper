import _ from "lodash";
import fs from "fs";
import path from "path";
import { order_by_freq } from "../utils";
import { splitBy } from "../../utils";

const prettier = require("prettier");

const src = {
  "Pre-primer":
    "a, and, away, big, blue, can, come, down, find, for, funny, go, help, here, I, in, is, it, jump, little, look, make, me, my, not, one, play, red, run, said, see, the, three, to, two, up, we, where, yellow, you",
  Primer:
    "all, am, are, at, ate, be, black, brown, but, came, did, do, eat, four, get, good, have, he, into, like, must, new, no, now, on, our, out, please, pretty, ran, ride, saw, say, she, so, soon, that, there, they, this, too, under, want, was, well, went, what, white, who, will, with, yes",
  "1th Grade":
    "after, again, an, any, as, ask, by, could, every, fly, from, give, giving, had, has, her, him, his, how, just, know, let, live, may, of, old, once, open, over, put, round, some, stop, take, thank, them, then, think, walk, were, when",
  "2nd Grade":
    "always, around, because, been, before, best, both, buy, call, cold, does, don't, fast, first, five, found, gave, goes, green, its, made, many, off, or, pull, read, right, sing, sit, sleep, tell, their, these, those, upon, us, use, very, wash, which, why, wish, work, would, write, your",
  "3rd Grade":
    "about, better, bring, carry, clean, cut, done, draw, drink, eight, fall, far, full, got, grow, hold, hot, hurt, if, keep, kind, laugh, light, long, much, myself, never, only, own, pick, seven, shall, show, six, small, start, ten, today, together, try, warm",
  Nouns:
    "apple, baby, back, ball, bear, bed, bell, bird, birthday, boat, box, boy, bread, brother, cake, car, cat, chair, chicken, children, Christmas, coat, corn, cow, day, dog, doll, door, duck, egg, eye, farm, farmer, father, feet, fire, fish, floor, flower, game, garden, girl, good-bye, grass, ground, hand, head, hill, home, horse, house, kitty, leg, letter, man, men, milk, money, morning, mother, name, nest, night, paper, party, picture, pig, rabbit, rain, ring, robin, Santa Claus, school, seed, sheep, shoe, sister, snow, song, squirrel, stick, street, sun, table, thing, time, top, toy, tree, watch, water, way, wind, window, wood",
};

describe("dolch", () => {
  it("build", () => {
    const categories = _.map(src, (s, name) => {
      return {
        name,
        words: splitBy(s, ","),
      };
    });
    const ranked = order_by_freq(categories);
    const json = JSON.stringify(ranked, null, "  ");
    const code = prettier.format(`
const categories = ${json};

export const dolch = { categories };
`);
    dump("../../data/dolch.ts", code);
  });
});

function dump(name: string, content: string) {
  fs.writeFileSync(path.resolve(__dirname, name), content);
}
