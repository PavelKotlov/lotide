const assertObjectsEqual = require('../lib/assertObjectsEqual');

describe("The function assertObjectsEqual", () => {
  it("should return 'Assertion Passed: object1 === object2' if two objects are strictly equal", () => {
    const actual = {colors: ["red", "blue"], size: "medium" };
    const expected = {size: "medium", colors: ["red", "blue"]};

    assertObjectsEqual(actual, expected);
  });

  it("should return 'Assertion Failed: object1 !== object2' if two objects are strictly not equal", () => {
    const actual = {colors: ["red", "blue"], size: "medium" };
    const expected = {size: "medium", colors: ["red", "blue"], sleeveLength: "long"};

    assertObjectsEqual(actual, expected);
  });
});
