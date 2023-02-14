const eqArrays = require('../lib/eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("retruns true for arrayOne[1, 2, 3] === arrayTwo[1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for arrayOne['1', '2', '3'] !== arrayTwo['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it("returns null for undefined !== arrayTwo['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(undefined, ["1", "2", 3]), null);
  });
});
