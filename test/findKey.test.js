const findKey = require('../lib/findKey');
const assertEqual = require('../lib/assertEqual');

describe("The function findKey", () => {
  it("should return the first restaurant's name given a certain amount of michelin stars, 'noma' has 2 stars", () => {
    const michelinStarRestaurants = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    const actual = findKey(michelinStarRestaurants, x => x.stars === 2);
    const expected = "noma";

    assertEqual(actual, expected);
  });

  it("should return null if no restaurant's star count equals a given certain amount of michelin stars, null has 4 stars", () => {
    const michelinStarRestaurants = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    const actual = findKey(michelinStarRestaurants, x => x.stars === 4);
    const expected = null;

    assertEqual(actual, expected);
  });

});