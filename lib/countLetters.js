const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let object = {};

  for (let letter of sentence) {
    if (letter !== " ") {
      if (object[letter]) {
        object[letter] += 1;
      } else {
        object[letter] = 1;
      }
    }
  }

  return object;
};

const result = countLetters("lighthouse in the house");

assertEqual(result['h'], 4);
assertEqual(result['l'], 1);
assertEqual(result['e'], 3);
assertEqual(result['g'], 1);
assertEqual(result['s'], 2);
assertEqual(result['d'], undefined);