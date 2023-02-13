const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (actual === undefined || expected === undefined) {
    console.log("Assertion Failed: One of the arrays is undefined");
    return;
  }

  if (eqArrays(actual, expected)) {
    console.log("Assertion Passed: The arrays are equal");
    return;
  }
  
  console.log("Assertion Failed: The arrays are not equal");
};

module.exports = assertArraysEqual;