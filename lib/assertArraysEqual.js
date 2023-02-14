const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (actual === undefined || expected === undefined) {
    console.log("Assertion Failed: One of the arrays is undefined");
    return null;
  }

  if (eqArrays(actual, expected)) {
    console.log("Assertion Passed: The arrays are equal");
    return true;
  }
  
  console.log("Assertion Failed: The arrays are not equal");
  return false;
};

module.exports = assertArraysEqual;