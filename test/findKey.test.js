const findKey = require('../lib/findKey');
const assert = require('chai').assert;

describe("#findKey", () => {
  it("returns 'noma' for x => x.stars === 2", () => {
    const michelinStarRestaurants = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    assert.strictEqual(findKey(michelinStarRestaurants, x => x.stars === 2), "noma");
  });

  it("returns null for x => x.stars === 4", () => {
    const michelinStarRestaurants = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    assert.isNull(findKey(michelinStarRestaurants, x => x.stars === 4));
  });
});