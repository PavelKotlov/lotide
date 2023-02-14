const assertObjectsEqual = require('../lib/assertObjectsEqual');
const assert = require('chai').assert;

describe("#assertObjectsEqual", () => {
  it("returns true for {colors: ['red', 'blue'], size: 'medium'} === {size: 'medium', colors: ['red', 'blue']}", () => {
    const actual = {colors: ["red", "blue"], size: "medium" };
    const expected = {size: "medium", colors: ["red", "blue"]};
    assert.isTrue(assertObjectsEqual(actual, expected));
  });

  it("returns false for {colors: ['red', 'blue'], size: 'medium'} === {size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long'}", () => {
    const actual = {colors: ["red", "blue"], size: "medium" };
    const expected = {size: "medium", colors: ["red", "blue"], sleeveLength: "long"};

    assert.isFalse(assertObjectsEqual(actual, expected));
  });
});