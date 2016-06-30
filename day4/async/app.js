// app.js
var fs = require("fs");
var sleep = require("./lib/sleep.js");

fs.readFile("movies.txt", "utf8", function(theError, fileContents) {

	console.log("\nFile has been read! Printing it's contents:");
	console.log(fileContents);
});

var sleep = require("./lib/sleep.js");

sleep(5, function(){
	console.log("5 seconds have ellapsed");
});


var colorsArray = ["pink", "purple", "blue", "green", "red"];

sleep(1, function () {
	colorsArray.forEach(function(theColor) {
		console.log(theColor.toUpperCase());
	});
});

console.log("END OF PROGRAM");




// function printOneMs(){
// 	console.log("1 MILLISECOND has ellapsed!!");
// }

// setTimeout(printOneMs, 1);


// cuntion print1SecondStuff(){
// 	console.log("I second has ellapsed!!");
// }

// setTimeout(print1SecondStuff);