/**
 * @param {number} input - the string to check
 * @returns {boolean} - the result of check
 */
const XoXo = input => {
  if (typeof input === 'string') {
    const string = input.toLowerCase();
    const resultObject = { x: 0, o: 0 };
    for (let i = 0; i < string.length; i++) {
      let letter = string[i];
      if (letter === 'x' || letter === 'o') {
        resultObject[letter]++;
      }
    }
    if (resultObject.x === 0 && resultObject.o === 0) return true;
    return resultObject.x === resultObject.o ? true : false;
  }
  return 'Error: input should be a string';
};
module.exports = XoXo;
