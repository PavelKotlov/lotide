const flatten = require('../lib/flatten');
const eqArrays = require('../lib/eqArrays');
const assertEqual = require('../lib/assertEqual');

describe("The function flatten", () => {
  it("should return 'Assertion Passed: value1 === value2' after interpolating nested arrays into the parent array, if the parent array is equal the given array", () => {
    const actual = eqArrays(flatten([1, 5, 4, [8, 9], 5, [7, 8]]), [1, 5, 4, 8, 9, 5, 7, 8]);
    const expected = true;

    assertEqual(actual, expected);
  });

  it("should return 'Assertion Failed: value1 !== value2' after interpolating nested arrays into the parent array, if the parent array is not equal the given array", () => {
    const actual = eqArrays(flatten([1, 5, 4, [8, 9], 5, [7, 8]]), [1, 5, 4, [8, 9], 5, [7, 8]]);
    const expected = false;

    assertEqual(actual, expected);
  });
});