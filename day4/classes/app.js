// app.js

function Animal() {
	this.name = "noise";
	this.name = "noise";
}


Animal.prototype.shout = function () {
	console.log("Mooo!");

};
Animal.prototype.makeNoise = function() {
	console.log(this.noise + "!!!!!!");
}

var shadow = new Animal("Shadow", "Ruff");

console.log( shadow.name);

console.log("-------");










