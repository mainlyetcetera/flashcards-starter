const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Turn {
  constructor(card, answer = '') {
    this.answer = answer;
    this.card = card;
    this.feedback;
  }

  returnGuess() {
    return this.answer;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.answer === this.card.correctAnswer ? true : false;
  }

  giveFeedback() {
    this.answer === this.card.correctAnswer ? this.feedback = 'correct!' : this.feedback = 'incorrect!';
    return this.feedback;
  }
}

module.exports = Turn;