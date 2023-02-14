const middle = require('../lib/middle');
const eqArrays = require('../lib/eqArrays');
const assertEqual = require('../lib/assertEqual');

describe("The function middle", () => {
  it("should return an empty array if a given array has 2 or less elements", () => {
    const actual = eqArrays(middle([1, 2]), []);
    const expected = true;

    assertEqual(actual, expected);
  });

  it("should return the middle element if a given array has an odd number of elements", () => {
    const actual = eqArrays(middle([1, 2, 3]), [2]);
    const expected = true;

    assertEqual(actual, expected);
  });

  it("should return the middle two elements if a given array has an even number of elements", () => {
    const actual = eqArrays(middle([1, 2, 3, 4]), [2, 3]);
    const expected = true;

    assertEqual(actual, expected);
  });

  it("should return false if the given arrays are not equal", () => {
    const actual = eqArrays(middle([1, 2, 3, 4]), [7, 8]);
    const expected = false;

    assertEqual(actual, expected);
  });

});