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

module.exports = middle;