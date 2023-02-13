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


const middle = function(array) {
  let result = [];

  if (array.length < 3) {
    return result;
  }

  for (let index of findMiddle(array.length)) {
    result.push(array[index]);
  }

  return result;
};

const findMiddle = function(arrayLength) {
  if (arrayLength % 2 === 0) {
    const value = arrayLength / 2;
    return [value - 1, value];
  }

  return [Math.floor(arrayLength / 2)];
};

assertArraysEqual(eqArrays(middle([1, 2]), []));
assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]));
assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]));
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]));
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]));