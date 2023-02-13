const assertEqual = require("../lib/assertEqual");
const head = require('../lib/head');

describe("The head function ", () => {
  it("should return true if the first element in an array strictly equals the given value in an argument", () => {
    const actual = head(["Hello", "Lighthouse", "Labs"]);
    const expected = "Hello";
    assertEqual(actual, expected);
  });

  it("should return false if the first element in an array does not strictly equals the given value in an argument", () => {
    const actual = head([1,2,3]);
    const expected = 8;
    assertEqual(actual, expected);
  });

  it("should return null if the first element in an array is undefined", () => {
    const actual = head([undefined]);
    const expected = null;
    assertEqual(actual, expected);
  });
});