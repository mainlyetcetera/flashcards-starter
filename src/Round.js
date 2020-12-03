const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.deck.cards[0];    
    // this.turn = new Turn(this.currentCard);
    this.turn;
    this.eval;
    this.feedback;
    // this.nextTurn;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  incrementCard() {
    this.currentCard = this.deck.cards[this.turns];
  }

  takeTurn(guess) {    
    this.turns++;
    this.turn = new Turn(this.currentCard, guess);
    this.eval = this.turn.evaluateGuess();
    this.feedback = this.turn.giveFeedback();
    // this.currentCard = this.deck.cards[this.turns];
    this.incrementCard();
    return {
      eval: this.eval,
      feedback: this.feedback,
      newTurn: this.turn,
      newCard: this.returnCurrentCard()
    };
  }
}

module.exports = Round;