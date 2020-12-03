const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', () => {
  let card1, card2, card3, cards, deck, turn, round, guess;

  beforeEach(() => {
    card1 = new Card(1, '4 + 5', ['6', '7', '9'], '9');
    card2 = new Card(2, '1 + 2', ['3', '4', '5'], '3');
    card3 = new Card(3, 'stuff or things', ['stuff', 'things', 'et cetera'], 'stuff');
    cards = [card1, card2, card3];
    
    deck = new Deck(cards);
    
    turn = new Turn('9', card1);
    guess = turn.answer;

    round = new Round(deck);
  });

  it('should be a function', () => expect(Round).to.be.a('function'));

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have the first card of the deck saved', () => {  
    expect(round.returnCurrentCard()).to.deep.equal(deck.cards[0]);    
  });

  it('should have a deck property which is a list of cards', () => {  
    expect(round.deck.cards).to.be.eql(cards);
  });

  describe('takeTurn', () => {
    let newTurn, guess, correctAnswer, currentCard;

    beforeEach(() => {
      guess = turn.answer;      
      correctAnswer = cards[0].correctAnswer;
      currentCard = turn.card;
    });

    it('should know what turn it\'s on', () => {  
      round.takeTurn(guess);    
      expect(round.turns).to.equal(2);

      round.takeTurn(guess);
      expect(round.turns).to.equal(3);
    });

    it('should make a new Turn instance', () => {
      const newTurn = round.takeTurn(guess);

      expect(newTurn).to.be.an.instanceof(Turn);
    });

    it('should update turn count upon correct answer', () => {
      round.takeTurn(guess);
      expect(guess).to.be.equal(correctAnswer);
      expect(round.turns).to.equal(2);
    });
    
    it('should update turn count upon incorrect answer', () => {
      round.takeTurn(guess);
      guess = '6';
      expect(guess).to.not.be.equal(correctAnswer);
      expect(round.turns).to.equal(2);
    });

    it('should make next card current card', () => {      
      expect(round.returnCurrentCard()).to.be.deep.equal(currentCard);

      const nextTurn = round.takeTurn(guess);
      currentCard = nextTurn.card;

      expect(round.returnCurrentCard()).to.be.deep.equal(currentCard);
    });

    it.skip('should say correct guess is correct', () => {
      expect(guess).to.equal(correctAnswer);
      expect(turn.evaluateGuess()).to.equal(true);
    });

    it.skip('should say incorrect guess is incorrect', () => {
      const turn = new Turn('mainlyetcetera', card);
    
      expect(turn.answer).to.not.equal(correctAnswer);
      expect(turn.evaluateGuess()).to.equal(false);
    });

    it.skip('should return "correct" feedback for correct guesses', () => {
      expect(turn.feedback).to.equal('correct!');
    });

    it.skip('should store incorrect guesses in incorrect guesses property', () => {
      expect(round.incorrectGuesses).lengthOf(1);

      round.takeTurn(guess);
      expect(round.incorrectGuesses).lengthOf(2);
    });  
  });

  describe('the end game', () => {
    
    it.skip('should have an incorrectGuesses property', () => {
      expect(round.incorrectGuesses).to.be.an('array');
      expect(round.incorrectGuesses).to.not.equal(undefined);
    });

    it.skip('should be able to calculate percentage of correct answers', () => {
      round.takeTurn(guess); // correct
      round.takeTurn(guess); // incorrect

      expect(round.turns).to.equal(2);
      expect(round.calculatePercentCorrect()).to.equal(50);  
    });

    it.skip('should be able to end the round', () => {
      round.takeTurn(guess); // correct
      round.takeTurn(guess); // incorrect
      const perc = Math.round(round.calculatePercentCorrect() * 100);
      const gameEnd = round.endRound();

      expect(gameEnd).to.equal(`Round over! You answered ${perc}% of the questions correctly!`);
    });
  });
});