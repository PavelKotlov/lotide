const countLetters = function(sentence) {
  let object = {};

  if (!sentence) return null;

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

module.exports = countLetters;