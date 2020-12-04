const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', () => {
  let cardProps, card1, card2, card3, cards, deck, turn, guess, round, game;

  beforeEach(() => {
    cardProps = [
      {
        id: 1,
        question: '4 + 5',
        answers: ['6', '7', '9'],
        correctAnswer: '9'
      },
      {
        id: 2,
        question: '1 + 2',
        answers: ['3', '4', '5'],
        correctAnswer: '3'
      },
      {
        id: 3,
        question: 'stuff or things',
        answers: ['stuff', 'things', 'et cetera'],
        correctAnswer: 'stuff'
      }
    ];
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

  it('should have currentRound property', () => {
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  describe('start method', () => {    

    it('should create cards', () => {
      game.start(cardProps);
      const testDeck = game.round.deck;

      expect(testDeck.cards[0]).to.be.an.instanceof(Card);
      expect(testDeck.cards[1]).to.be.an.instanceof(Card);
    });

    it.skip('should add cards to deck', () => {
      game.start(cardProps);
      const testDeck = game.round.deck;

      expect(testDeck.cards).to.have.a.lengthof(2);
      expect(testDeck.cards).to.deep.equal([card1, card2]);
    });

    it.skip('should create a new Round', () => {
      const newRound = start(cardProps);

      expect(newRound).to.be.an.instanceof(Round);
    });
  });
});