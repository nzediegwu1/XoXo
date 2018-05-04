const XoXo = input => {
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
};
module.exports = XoXo;