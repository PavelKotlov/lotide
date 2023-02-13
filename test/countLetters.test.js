const countLetters = require('../lib/countLetters');
const assertEqual = require('../lib/assertEqual');

describe("The function countletters", () => {
  it("should return an object that lists all the letters in a string and their quantity and see if letter 'h' appears 4 times", () => {
    const actual = countLetters("lighthouse in the house")['h'];
    const expected = 4;

    assertEqual(actual, expected);
  });

  it("should return undefined if the object returned does not contain the letter searched for", () => {
    const actual = countLetters("lighthouse in the house")['d'];
    const expected = undefined;

    assertEqual(actual, expected);
  });

  it("should return null if the sentence provided is a falsy value", () => {
    const actual = countLetters("");
    const expected = null;

    assertEqual(actual, expected);
  });
});
