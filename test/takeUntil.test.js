const takeUntil = require('../lib/takeUntil');
const assert = require('chai').assert;

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    const dataSetOne = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(dataSetOne, x => x < 0), [1, 2, 5, 7, 2]);
  });

  it("returns ['I've', 'been', 'to', 'Hollywood'] for ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood']", () => {
    const dataSetTwo = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(dataSetTwo, x => x === ","), ["I've", "been", "to", "Hollywood"]);
  });
});