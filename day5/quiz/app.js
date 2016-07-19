// app.js
"use strict"
var Question = require("./lib/question.js");
var Quiz = require("./lib/quiz.js");
// var read = require('read');



var question1 = new Question(1, "what is the primary program?", "JavaScript");
var question2 = new Question(2, "what allows you o run java?", "Node.js");


var theQuiz = new Quiz();

theQuiz.addQuestion( question1 );
theQuiz.addQuestion( question2 );

console.log (theQuiz.getCurrentQuestion() === "What is the primairy programming language on JavaScript");
console.log( theQuiz.answer("JavaScript") === true);
console.log( theQuiz.isGameOver() === false);

console.log( theQuiz.getCurrentQuestion());
console.log( theQuiz.answer("blah") === false);
console.log( thequiz.isGameOver() === false);

console.log( theQuiz.getCurrentQuestion());
console.log( theQuiz.answer("node.js") === true);
console.log( theQuiz.isGameOver() === true);


// for (var i =0; i < theQuiz.questions.length; i +=1 ) {
// 	var options = {promt:theQuiz.getCurrentQuestion()};

// 	read(options, function(theError,))
// }









