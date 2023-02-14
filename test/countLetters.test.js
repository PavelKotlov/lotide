const countLetters = require('../lib/countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("returns 4 for countLetters('lighthouse in the house').h", () => {
    assert.strictEqual(countLetters("lighthouse in the house").h, 4);
  });

  it("returns undefined for countLetters('lighthouse in the house').d", () => {
    assert.strictEqual(countLetters("lighthouse in the house").d, undefined);
  });

  it("returns null for countLetters('')", () => {
    assert.strictEqual(countLetters(""), null);
  });
});
