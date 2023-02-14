const findKeyByValue = function(object, value) {
  let result = undefined;

  for (const key in object) {
    if (object[key] === value) {
      result = key;
    }
  }
  
  return result;
};

module.exports = findKeyByValue;