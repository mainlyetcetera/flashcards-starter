const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.deck.cards[this.turns];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {    
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];    
    return new Turn(guess, this.currentCard);    
  }
}

module.exports = Round;