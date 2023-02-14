const letterPositions = require('../lib/letterPositions');
const assertArraysEqual = require('../lib/assertArraysEqual');

describe("The function letterPositions", () => {
  it("should return an array that return all the positions of a given letter within a sentence", () => {
    const actual = letterPositions("lighthouse in the house").h;
    const expected = [3, 5, 15, 18];

    assertArraysEqual(actual, expected);
  });

  it("should return undefined if a given letter's postions are non existant since the letter is not present in the sentence", () => {
    const actual = letterPositions("lighthouse in the house").p;
    const expected = undefined;

    assertArraysEqual(actual, expected);
  });
});