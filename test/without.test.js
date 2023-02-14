const without = require('../lib/without');
const eqArrays = require('../lib/eqArrays');
const assertArraysEqual = require('../lib/assertArraysEqual');

describe("The function without", () => {
  it("should return an array without a given element", () => {
    const actual = eqArrays(without([1, 2, "3"], ["3"]), [1, 2]);
    const expected = true;
    
    assertArraysEqual(actual, expected);
  });

  it("should return an array without any changes if not given an element", () => {
    const actual = eqArrays(without([1, 2, "3"], []), [1, 2, "3"]);
    const expected = true;
    
    assertArraysEqual(actual, expected);
  });
});