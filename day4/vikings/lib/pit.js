// pit.js
"use strict";
class Pit {
	constructor(Viking1, Viking2){
		this.Viking1 = Viking1;
		this.Viking2 = Viking2;
	}
	fight(){
		while (this.Viking1.health >= this.Viking2.strength && this.Viking2.health >= this.Viking1.strength){
			this.Viking1.health -= this.Viking2.strength;
			this.Viking2.health -= this.Viking1.strength;
		}
		if (this.Viking1.health > this.Viking2.health) {
			console.log(this.Viking1.name + " is the winner");
		}
		else if (this.Viking2.health > this.Viking1.health) {
			console.log(this.Viking2.name + " is the winner.");
		}

	} 

}
	module.exports = Pit;

	