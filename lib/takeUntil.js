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
    console.log("Assertion Passed: The arrays are equal.");
    return;
  }
  
  console.log("Assertion Failed: The arrays are not equal.");
};

const takeUntil = function(array, callback) {
  let output = [];
  for (const element of array) {
    if(callback(element) === true) {
      break;
    };

    output.push(element)
  }

  return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(results1, [1, 2, 5, 7, 2]); // => true
assertArraysEqual(results1, [2, 7, 5, 2, 1]); // => false
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); // => true
assertArraysEqual(results2, ["I've", "been", "to", "Bollywood"]); // => false