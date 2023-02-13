const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (object1 === undefined || object2 === undefined) return null;
  
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (object1[key] !== object2[key]) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          return eqArrays(object1[key], object2[key]);
        } else {
          return false;
        }
      }
    }
    return true;
  }

  return false;
};

module.exports = eqObjects;