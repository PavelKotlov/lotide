const eqObjects = require('../lib/eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("returns true for {color: 'red', size: 'medium'} === {size: 'medium', color: 'red'}", () => {
    assert.isTrue(eqObjects({ color: "red", size: "medium" }, { size: "medium", color: "red" }));
  });

  it("returns false for {color: 'red', size: 'medium'} === {size: 'medium', color: 'red', sleeveLength: 'long'}", () => {
    assert.isFalse(eqObjects({ color: "red", size: "medium" }, {size: "medium", colors: ["red", "blue"], sleeveLength: "long"}));
  });

  it("returns null for undefined !== {size: 'medium', color: 'red', sleeveLength: 'long'}", () => {
    assert.isNull(eqObjects(undefined, {size: "medium", colors: ["red", "blue"], sleeveLength: "long"}));
  });
});