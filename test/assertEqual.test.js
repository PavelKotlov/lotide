const assertEquals = require('../lib/assertEqual');

describe("The function assertEquals ", () => {
  it("should return a string with 'Assertion Passed: value1 === value2' if two values are strictly equal", () => {
    const actual = "Lighthouse Labs";
    const expected = "Lighthouse Labs";

    assertEquals(actual, expected);
  });

  it("should return a string with 'Assertion Failed: value1 === value2' if two values are strictly not equal", () => {
    const actual = "Lighthouse Labs";
    const expected = "Burger King";

    assertEquals(actual, expected);
  });

  it("should return a string with `Assertion Failed: One of the values is undefined' if one of the values is undefined", () => {
    const actual = undefined;
    const expected = null;

    assertEquals(actual, expected);
  });

  
});