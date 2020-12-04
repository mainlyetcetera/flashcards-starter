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
    let cardProps, newCard1Props, newCard1, newCard2, newCards, newDeck;

    beforeEach(() => {
      const cardProps = [
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
        }
      ];

      newCard1Props = cardProps[0];
      newCard1 = new Card(newCard1Props.id, newCard1Props.question, newCard1Props.answers, newCard1Props.correctAnswer);

      newCard2Props = cardProps[1];
      newCard2 = new Card(newCard2Props.id, newCard2Props.question, newCard2Props.answers, newCard2Props.correctAnswer);

      newCards = [newCard1, newCard2];

      newDeck = new Deck(newCards);
    });

    it.skip('should create cards', () => {
      const addCards = start(cardProps);      

      expect(newCards[0]).to.be.an.instanceof(Card);
      expect(newCards[1]).to.be.an.instanceof(Card);
    });

    it.skip('should add cards to deck', () => {
      expect(newDeck.cards).to.have.a.lengthof(2);
      expect(newDeck.cards).to.deep.equal([card1, card2]);
    });

    it.skip('should create a new Round', () => {
      const newRound = start(cardProps);

      expect(newRound).to.be.an.instanceof(Round);
    });
  });
});