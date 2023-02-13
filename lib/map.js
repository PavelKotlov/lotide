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
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  
  console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3];
const arrays = [false, true, true];

const results1 = map(words, word => word[0]);
const results2 = map(numbers, num => num * 2);
const results3 = map(arrays, array => {
  if (array === true) {
    return false;
  }
  return true;
});


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // true
assertArraysEqual(results1, ['t', 'm', 't', 'c', 'g', 'd']); //false
assertArraysEqual(results1, ['t', 'm', 't', 'c', 'g']); //false

assertArraysEqual(results2, [2, 4, 6]); //true
assertArraysEqual(results2, [3, 5, 7]); //false

assertArraysEqual(results3, [true, false, false]); //true
assertArraysEqual(results3, [false, false, false]); //false