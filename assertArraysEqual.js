const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne === undefined || arrayTwo === undefined) {
    return false;
  }
  
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
  if (eqArrays(actual[0], actual[1]) === expected) {
    return console.log("Assertion Passed: The arrays are equal.");
  }
  
  return console.log("Assertion Failed: The arrays are not equal.");
};


assertArraysEqual([[1, 2, "3"], [1, 2, "3"]], true);