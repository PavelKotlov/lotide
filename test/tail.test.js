const tail = require('../lib/tail');
const eqArrays = require('../lib/eqArrays');
const assertEqual = require('../lib/assertEqual');


describe("The function tail", () => {
  it("should return true if the rest of an array minus the first element equal to the given array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const actual = eqArrays(tail(words), ["Lighthouse", "Labs"]);
    const expected = true;

    assertEqual(actual, expected);
  });

  it("should return false if the rest of an array minus the first element is not equal the given array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const actual = eqArrays(tail(words), ["Lighthouse"]);
    const expected = false;

    assertEqual(actual, expected);
  });
});