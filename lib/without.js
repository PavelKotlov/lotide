const without = function(source, itemsToRemove) {
  let newArray = [];
  if (itemsToRemove.length > 0) {
    for (let element of source) {
      for (let item of itemsToRemove) {
        if (element !== item) {
          newArray.push(element);
        }
      }
    }
  }
    
  if (itemsToRemove.length === 0) {
    newArray = source;
  }
  
  return newArray;
};

module.exports = without;