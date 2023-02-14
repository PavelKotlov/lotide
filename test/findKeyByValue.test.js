const findKeyByValue = require('../lib/findKeyByValue');
const assertEqual = require('../lib/assertEqual');

describe("The function findKeyByValue", () => {
  it("should return the value of an object key based on the value of the object parameter, 'The Wire' === 'drama'", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    const actual = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expected = "drama";

    assertEqual(actual, expected);
  });

  it("should return undefined if an object key's value cannot be returned because  the object parameter doesn't exist, 'That '70s Show' === undefined", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    const actual = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    const expected = undefined;

    assertEqual(actual, expected);
  });
});