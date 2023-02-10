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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual[0], actual[1]) === expected) {
    return console.log(`Assertion Passed: ${inspect(actual[0])} === ${inspect(actual[1])}`);
  }
  
  return console.log(`Assertion Failed: ${inspect(actual[0])} === ${inspect(actual[1])}`);
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (object1[key] !== object2[key]) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          return eqArrays(object1[key], object2[key]);
        } 
      } else {
        return false;
      }
    }
    return true;
  }
  
  return false;
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"]};

assertObjectsEqual([multiColorShirtObject, anotherMultiColorShirtObject], true);