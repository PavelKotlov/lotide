const letterPositions = function(sentence) {
  const results = {};

  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== " ") {
      if (results[sentence[index]]) {
        results[sentence[index]].push(index);
      } else {
        results[sentence[index]] = [index];
      }
    }
  }

  return results;
};

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

assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);
assertArraysEqual(letterPositions("lighthouse in the house").g, [2]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions("lighthouse in the house").t, [4, 14]);
assertArraysEqual(letterPositions("lighthouse in the house").o, [6, 19]);
assertArraysEqual(letterPositions("lighthouse in the house").u, [7, 20]);
assertArraysEqual(letterPositions("lighthouse in the house").s, [8, 21]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
assertArraysEqual(letterPositions("lighthouse in the house").n, [12]);
