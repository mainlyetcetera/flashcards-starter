const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Round {
  constructor(deck) {
    this.deck = deck;
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }
}

module.exports = Round;