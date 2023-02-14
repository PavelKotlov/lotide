const map = require('../lib/map');
const assertArraysEqual = require('../lib/assertArraysEqual');

describe("The function map", () => {
  it("should return an array with the first letter of each word in the given array, ['ground', 'control', 'to', 'major', 'tom'] should become ['g', 'c', 't', 'm', 't']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const actual = map(words, word => word[0]);
    const expected = ['g', 'c', 't', 'm', 't'];

    assertArraysEqual(actual, expected);
  });
  
  it("should return an array with the updated boolean value, [false, true, true] should become [false, false, false]", () => {
    const arrays = [false, true, true];
    const actual = map(arrays, array => {
      if (array === true) return false;
      return true;
    });
    const expected = [false, false, false];

    assertArraysEqual(actual, expected);
  });
});