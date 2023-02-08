const eqArrays = function(arrayComparison, arrayTwo) {
  let result = true;

  if (arrayComparison.length !== arrayTwo.length) {
    return false;
  }

  for (let i = 0; i < arrayComparison.length; i++) {
    if (arrayComparison[i] !== arrayTwo[i]) {
      result = false;
    }
  }

  return result;
};

const assertArraysEqual = function(arrayComparison) {
  if (arrayComparison) {
    return console.log("Assertion Passed: The arrays are equal.");
  }
  
  return console.log("Assertion Failed: The arrays are not equal.");
  
};

const flatten = function(array) {
  let result = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let nestedElement of element) {
        result.push(nestedElement);
      }
    }

    if (!Array.isArray(element)) {
      result.push(element);
    }
  }
  
  return result;
};

assertArraysEqual(eqArrays(flatten([1, 5, 4, [8, 9], 5, [7, 8]]), [1, 5, 4, [8, 9], 5, [7, 8]])); // => not equal.
assertArraysEqual(eqArrays(flatten([1, 5, 4, 8, 9, 5, 7, 8]), [1, 5, 4, [8, 9], 5, [7, 8]])); // => not equal.
assertArraysEqual(eqArrays(flatten([1, 5, 4, [8, 9], 5, [7, 8]]), [1, 5, 4, 8, 9, 5, 7, 8])); // => equal.