const countOnly = require('../lib/countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {
  it("returns 1 for countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false})['Jason']", () => {
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
    
    assert.strictEqual(actual, expected);
  });

  it("returns undefined for countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false})['Karima']", () => {
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
    
    const actual = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false})["Karima"];
    const expected = undefined;
    
    assert.strictEqual(actual, expected);
  });
});