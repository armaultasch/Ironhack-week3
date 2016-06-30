// count-colors.js

function countColors (color, theArray) {
	var colorOccurances =;

	theArray.forEach(function (colorFromArray) {
		if (colorFromArray === color) {
			colorOccurances += 1;
		}
	});
	return colorOccurances;
}

//explicityely declare the countColors fucntion
//as the thing you are providing to file.js
module.exports = countColors;
