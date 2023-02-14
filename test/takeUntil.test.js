const takeUntil = require('../lib/takeUntil');
const assertArraysEqual = require('../lib/assertArraysEqual');

describe("The function takeUntil", () => {
  it("should return all values in an array up to the given value", () => {
    const dataSetOne = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const actual = takeUntil(dataSetOne, x => x < 0);
    const expected = [1, 2, 5, 7, 2];

    assertArraysEqual(actual, expected)
  });

  it("should return 'Assertion Failed: The arrays are not equal' since the returned array does not equal the expected array", () => {
    const dataSetTwo = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const actual = takeUntil(dataSetTwo, x => x === ",");
    const expected = ["I've", "been", "to", "Bollywood"];

    assertArraysEqual(actual, expected);
  });
});