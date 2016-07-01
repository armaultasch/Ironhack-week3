// war.js

"use strict";
var randomInteger = require("./random-int.js");

class War {
	constructor(Vikings, Saxons){
		this.Vikings = Vikings;
		this.Saxons = Saxons;
		this.turns = randomInteger(5, 8);
		this.casualties = {
		vikings: [],
		victims: [],
		}
	}
	fight(){
		for (var i=1; i <= this.turns; i++){
			var survivors = [];
			var theWar = this;
		
		this.Vikings.forEach(function(viking){
			var randomIndex = randomInteger(0, theWar.Saxons.length - 1)
			var randomVictim = theWar.Vikings[randomIndex];

			viking.attack(randomVictim);
			randomVictim.attack(viking);
			if (viking.health <= 0){
				theWar.casualties.vikings.push(viking);
			} else {
				survivors.push(viking);
			}

			if (randomVictim.health <= 0){
				theWar.casualties.victims.push(randomVictim);
				theWar.Saxons.splice(randomIndex, 1);
			}
			});
			theWar.Vikings = survivors;
			// x.makeWarCry();
		 
		}
		this.printCasualtyReport();
	}
	printCasualtyReport(){
		console.log('The vikings has ${this.casualties.vickings.length - 1} casualties');
		console.log('The saxons had ${this.casualties.saxons.length - 1} casualties');
	}
}
		module.exports = War;

		// printCasualtyReport() {
		// 	console.log()
		// }
	// 	while (this.Viking1.health >= this.Viking2.strength && this.Viking2.health >= this.Viking1.strength){
	// 		this.Viking1.health -= this.Viking2.strength;
	// 		this.Viking2.health -= this.Viking1.strength;
	// 	}
	// 	if (this.Viking1.health > this.Viking2.health) {
	// 		console.log(this.Viking1.name + " is the winner");
	// 	}
	// 	else if (this.Viking2.health > this.Viking1.health) {
	// 		console.log(this.Viking2.name + " is the winner.");
	// 	}

	// } 

// }
// }
	module.exports = War;
