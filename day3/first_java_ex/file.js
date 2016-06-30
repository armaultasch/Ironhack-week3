// file.js



var colorsArray = ["indigo", "black", "indigo", "purple", "indigo", "chartreuse", "indigo", "magenta", "chartreuse", "scarlet"];

function countColors (color, theArray) {
	var counter = 0;
	var colorOccurances = 0;
	for (counter = 0; counter < theArray.length; counter ++) {
		var colorFromArray = theArray[counter];

		
		if (colorFromArray === color) {
			colorOccurances +=1;
		}
		//need to do something with color var
	}
		
	return colorOccurances;
}

console.log("Testing countColors function");



console.log( countColors("indigo", colorsArray) === 4);
//ruby equivalent 
//p countColors("indigo", colors_array) == 2
console.log( countColors("black", colorsArray) === 1);

console.log( countColors("pink", colorsArray) === 0);


function eat () {
	console.log("Eating pizza.");
}

eat ();
console.log( eat);

var upperCaseColors = colorsArray.map(function (colorFromArray) {
	return colorFromArray.toUpperCase();
});

console.log(upperCaseColors);
