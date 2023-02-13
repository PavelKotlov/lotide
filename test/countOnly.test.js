const countOnly = require('../lib/countOnly');
const assertEqual = require('../lib/assertEqual');

describe("The function countOnly", () => {
  it("should return the number of times a given name has been counted, if given 'Jason' return 1", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const actual = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Jason"];
    const expected = 1;
    
    assertEqual(actual, expected);
  });

  it("should return undefined if a given name has not been counted, and therefore did not exist in the original object. 'Karima' return undefined", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const actual = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Karima"];
    const expected = undefined;
    
    assertEqual(actual, expected);
  });
});