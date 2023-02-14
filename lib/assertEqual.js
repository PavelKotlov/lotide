const assertEqual = function(actual, expected) {
  if (actual === undefined || expected ===  undefined) {
    console.log(`Assertion Failed: One of the values is undefined`);
    return null;
  } else if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

module.exports = assertEqual;