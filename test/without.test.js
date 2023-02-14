const without = require('../lib/without');
const assert = require('chai').assert;

describe("#without", () => {
  it("returns [1, 2] for [1, 2, '3'] without ['3']", () => {
    assert.deepEqual(without([1, 2, "3"], ["3"]), [1, 2]);
  });

  it("returns [1, 2, '3'] for 1, 2, '3'] without []", () => {
    assert.deepEqual(without([1, 2, "3"], []), [1, 2, "3"]);
  });
});