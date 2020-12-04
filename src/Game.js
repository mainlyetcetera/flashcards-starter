const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Round = require('./Round');

class Game {
  constructor(deck, round) {
    this.deck = deck;
    this.currentRound = round;
  }

  start(properties) {
    return properties.map(setOfProperties => new Card(setOfProperties.id, setOfProperties.question, setOfProperties.answers, setOfProperties.correctAnswer));
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;