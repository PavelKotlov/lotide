const head = require('../lib/head');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns lighthouse for ['lighthouse', 'labs', 'inc']", () => {
    assert.strictEqual(head(['lighthouse', 'labs', 'inc']), 'lighthouse');
  });

  it("return null for [undefined]", () => {
    assert.strictEqual(head([undefined]), null);
  });
});