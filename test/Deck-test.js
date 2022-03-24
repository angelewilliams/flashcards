const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let card1, card2, card3, deck;
  beforeEach(() => {
     card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
     card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
     card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
     deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function(){
    expect(Deck).to.be.a('function');
  });

  it('should instantiate deck', function(){
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should be initialized with an array of Card objects', function(){
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('countCards method should return number of flashcards in deck', function(){
    const deck = new Deck([card1, card2]);
    expect(deck.countCards()).to.equal(2);
  });

});
