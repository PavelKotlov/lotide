const assertEquals = require('../lib/assertEqual');
const assert = require('chai').assert;

describe("#assertEquals", () => {
  it("returns true for 'Lighthouse Labs' === 'Lighthouse Labs'", () => {
    assert.isTrue(assertEquals('Lighthouse Labs', 'Lighthouse Labs'));
  });

  it("returns false for 'KFC' !== 'Burger King'", () => {
    const actual = "KFC";
    const expected = "Burger King";

    assert.isFalse(assertEquals('KFC', 'Burger King'));
  });

  it("returns null for undefined !== 'Robert'", () => {
    assert.isNull(assertEquals(undefined, 'Robert'));
  });
});