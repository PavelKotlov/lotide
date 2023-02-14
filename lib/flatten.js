const flatten = function(array) {
  let result = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let nestedElement of element) {
        result.push(nestedElement);
      }
    }

    if (!Array.isArray(element)) {
      result.push(element);
    }
  }
  
  return result;
};

module.exports = flatten;