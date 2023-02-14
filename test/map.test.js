const map = require('../lib/map');
const assert = require('chai').assert;

describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  
  it("returns [false, false, false] for [false, true, true]", () => {
    const arrays = [false, true, true];
    assert.deepEqual(map(arrays, array => {
      if (array === true) {
        return false;
      }

      return false;
    }), [false, false, false])
  });
});