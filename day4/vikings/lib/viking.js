// lib/viking.js
"use strict";
class Vikings {
	constructor(name, health, strength) {
		this.name = name;
		this.health = health;
		this.strength = strength;
	
	}

  attack (otherNpc){
    otherNpc.health = otherNpc.health - this.strength;
    console.log(`${this.name} has wounded ${otherNpc.name} for ${this.strength} points of damage.`)
  }
//  makeWarCry(){
// 	console.log("AHHHHHH");

// }
}
module.exports = Vikings;

