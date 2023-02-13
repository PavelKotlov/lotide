const eqObjects = require('../lib/eqObjects');
const assertEqual = require('../lib/assertEqual');

describe("The function eqObjects", () => {
  it("should return true if two object are strictly equal", () => {
    const actual = eqObjects({ color: "red", size: "medium" }, { size: "medium", color: "red" });
    const expected = true;

    assertEqual(actual, expected);
  });

  it("should return false if two object are strictly not equal", () => {
    const actual = eqObjects({colors: ["red", "blue"], size: "medium"}, {size: "medium", colors: ["red", "blue"], sleeveLength: "long"});
    const expected = false;

    assertEqual(actual, expected);
  });

  it("should null if either of the objects are undefined", () => {
    const actual = eqObjects(undefined, {size: "medium", colors: ["red", "blue"], sleeveLength: "long"});
    const expected = null;

    assertEqual(actual, expected);
  });
});