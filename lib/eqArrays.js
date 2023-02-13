const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne === undefined || arrayTwo === undefined) {
    return null;
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

module.exports = eqArrays;