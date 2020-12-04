const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Game', () => {
  let game;

  beforeEach(() => {
    card1 = new Card(1, '4 + 5', ['6', '7', '9'], '9');
    card2 = new Card(2, '1 + 2', ['3', '4', '5'], '3');
    card3 = new Card(3, 'stuff or things', ['stuff', 'things', 'et cetera'], 'stuff');
    cards = [card1, card2, card3];
    
    deck = new Deck(cards);
    
    turn = new Turn(card1, '9');
    guess = turn.answer;

    round = new Round(deck);
    game = new Game(deck, round);
  });

  it.skip('should have currentRound property', () => {
    expect(game.round).to.be.an.instanceof(Round);
  });

  describe('start method', () => {

    it.skip('should create cards', () => {
      const cardProps1 = {
        id: 1,
        question: '4 + 5',
        answers: ['6', '7', '9'],
        correctAnswer: '9'
      };

      const cardProps2 = {
        id: 2,
        question: '1 + 2',
        answers: ['3', '4', '5'],
        correctAnswer: '3'
      };

      const first = start(cardProps1);
      const second = start(cardProps2);

      expect(first).to.deep.equal(card1);
      expect(second).to.deep.equal(card2);
    });
  });
});