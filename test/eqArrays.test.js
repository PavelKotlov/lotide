const eqArrays = require('../lib/eqArrays');
const assertEqual = require('../lib/assertEqual');

describe("The function eqArrays ", () => {
  it("should return true if two given arrays are strictly equal", () => {
    const actual = eqArrays([1, 2, 3], [1, 2, 3]);
    const expected = true;

    assertEqual(actual, expected);
  });

  it("should return false if two given arrays are strictly not equal", () => {
    const actual = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    const expected = false;

    assertEqual(actual, expected);
  });

  it("should return null if a given array is undefined", () => {
    const actual = eqArrays(undefined, ["1", "2", 3]);
    const expected = null;

    assertEqual(actual, expected);
  });
});
