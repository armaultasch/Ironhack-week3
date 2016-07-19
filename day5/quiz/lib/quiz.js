// quiz.js
"use strict"
class Quiz {
	consturctor () {
		this.questions = [];
		this.currentIndex = 0;
	}
	addQuestion(newQuestion) {
		this.questions.push(newQuestion);
	}

	getCurrentQuestion() {
		var index = this.currentIndex;
		var currentQuestion = this.questions[index];
		return currentQuestion.question_text;
	}

	answer(input) {
		var index = this.currentIndex;
		var currentQuestion = this.questions[index];

		if (currentQuestion.answer === input) {
			this.currentIndex += 1;
			return true;
		}
		else {
			return false;
		}
	}

	isGameOver(){
		if (this.currentIndex >= this.questions.length){
			return true;
		}
		else {
			return false;
		}
	}
}
module.exports = Quiz;