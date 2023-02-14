const assertArraysEqual = require('../lib/assertArraysEqual');
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, '3'] === [1, 2, '3']", () => {
    assert.isTrue(assertArraysEqual([1, 2, "3"], [1, 2, "3"]));
  });

  it("returns false for [1, 2, '3'] !== [1, 2, 3]", () => {
    assert.isFalse(assertArraysEqual([1, 2, "3"], [1, 2, 3]));
  });
  
  it("returns null for undefined !== [1, 2, 3]", () => {
    assert.isNull(assertArraysEqual(undefined, [1, 2, 3]));
  });
});