const flatten = require('../lib/flatten');
const assert = require('chai').assert;

describe("#flatten", () => {
  it("returns [1, 5, 4, 8, 9, 5, 7, 8] for [1, 5, 4, [8, 9], 5, [7, 8]]", () => {
    assert.deepEqual(flatten([1, 5, 4, [8, 9], 5, [7, 8]]), [1, 5, 4, 8, 9, 5, 7, 8]);
  });
});