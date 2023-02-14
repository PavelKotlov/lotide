const letterPositions = require('../lib/letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns [3, 5, 15, 18] for letter h position in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });

  it("returns undefined for letter p position in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").p, undefined);
  });
});