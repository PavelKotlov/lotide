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

const without = function(source, itemsToRemove) {
  let newArray = [];
  if (itemsToRemove.length > 0) {
    for (let element of source) {
      for (let item of itemsToRemove) {
        if (element !== item) {
          newArray.push(element);
        }
      }
    }
  }
    
  if (itemsToRemove.length === 0) {
    newArray = source;
  }
  
  return newArray;
};

assertArraysEqual(eqArrays(without([1, 2, "3"], ["3"]), [1, 2, "3"])); // => not equal.
assertArraysEqual(eqArrays(without([1, 2, "3"], [1, 2]), [1, 2, "3"])); // => not equal.
assertArraysEqual(eqArrays(without([1, 2, "3"], [1, 2, "3"]), [1, 2, "3"])); // => not equal.
assertArraysEqual(eqArrays(without([1, 2, "3"], ["1", "2", "3", 1, 2, 3]), [1, 2, "3"])); // => not equal.
assertArraysEqual(eqArrays(without([1, 2, "3"], [[1, 2, 3]]), [1, 2, "3"])); // => equal.
assertArraysEqual(eqArrays(without([1, 2, "3"], []), [1, 2, "3"])); // => equal.


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => equal.
