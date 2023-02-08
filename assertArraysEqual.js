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


assertArraysEqual(eqArrays([1, 2, "3"], [1, 2, "3"]));