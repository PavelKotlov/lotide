const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log("Assertion Passed: The arrays are equal.");
  }
  
  return console.log("Assertion Failed: The arrays are not equal.");
};


assertArraysEqual([1, 2, "3"], [1, 2, "3"]);
assertArraysEqual([1, 2, "3"], [1, 2, 3]);