// app.js
"use strict";
var Vikings = require("./lib/viking.js");
var Saxon = require("./lib/saxon.js");
var Pit = require("./lib/pit.js");
var War = require("./lib/war.js");
var randomInteger = require("./lib/random-int.js");

var bigGuy1,bigGuy2,bigGuy3,bigGuy4,bigGuy5,bigGuy6,bigGuy7;

var myVikings = [
bigGuy1 = new Vikings("Alison", 90, 20),
bigGuy2 = new Vikings("Andres", 100, 40),
bigGuy3 = new Vikings("Alberto", 20, 10),
bigGuy4 = new Vikings("Amanda", 20, 25),
bigGuy5 = new Vikings("Ariel", 20, 4),
bigGuy6 = new Vikings("Alia", 20, 4),
bigGuy7 = new Vikings("Anita", 20, 4)
];

// myVikings.forEach(function(x){
// // var x=0;x<Vikings.length;x++
// console.log(x.name, x.health, x.strength);


// });

var myPit = new Pit(bigGuy1, bigGuy2);
// myPit.fight();

var sax1,sax2,sax3,sax4,sax5,sax6,sax7,sax8;

var mySaxons = [
sax1 = new Saxon(),
sax2 = new Saxon(),
sax3 = new Saxon(),
sax4 = new Saxon(),
sax5 = new Saxon(),
sax6 = new Saxon(),
sax7 = new Saxon(),
sax8 = new Saxon(),

];

// console.log( mySaxons);

var myWar = new War(myVikings, mySaxons);
myWar.fight();

// shadow.shout();
// shadow.makeNoise();

// var princess = new Animal("Princess", "Meow");

// console.log(princess.name);
// princess.shout();
// princess.makeNoise();