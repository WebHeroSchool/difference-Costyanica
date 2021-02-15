function difference(array1, array2) {
    const result = array1.filter(el => !array2.includes(el));
    
    return result;
  }

module.exports = difference;
