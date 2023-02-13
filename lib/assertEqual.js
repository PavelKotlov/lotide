const assertEqual = function(actual, expected) {
  if (actual === undefined || expected ===  undefined) {
    console.log(`Assertion Failed: One of the values is undefined`);
  } else if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;