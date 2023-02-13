const head = function(array) {
  if (array[0] === undefined) return null;

  return array[0];
};

module.exports = head;