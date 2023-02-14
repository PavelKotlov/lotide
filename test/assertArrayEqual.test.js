const assertArraysEqual = require('../lib/assertArraysEqual');
const assert = require('chai').assert;

describe("The assertArraysEqual function ", () => {
  it("should return 'Assertion Passed: The arrays are equal' if two arrays are strictly equal", () => {
    const actual = [1, 2, "3"];
    const expected = [1, 2, "3"];

    assert.deepEqual(actual, expected);
  });

  it("should return 'Assertion Failed: The arrays are not equal' if two arrays are strictly not equal", () => {
    const actual = [1, 2, "3"];
    const expected = [1, 2, 3];
    
    assert.deepEqual(actual, expected);
  });
  
  it("should return null 'Assertion Failed: One of the arrays is undefined' if one of the arrays is undefined", () => {
    const actual = undefined;
    const expected = [1, 2, 3];
    
    assert.deepEqual(actual, expected);
  });

});