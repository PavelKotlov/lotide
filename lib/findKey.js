const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key]))
      return key;
  }

  return null;
};

module.exports = findKey;