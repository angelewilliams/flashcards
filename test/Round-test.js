const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round',  function(){

  it('should be a function', function (){
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be instantiate a round', function (){
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should accept a deck as the input', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck)
    expect(round.deck).to.equal(deck);
  });

  it('returnCurrentCard should return the current card being played', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck)
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it.skip('takeTurn should update turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses', function(){
    // When a guess is made, a new Turn instance is created.

  });

  it.skip('should', function(){});
  it.skip('should', function(){});
  it.skip('should', function(){});


});
//notes pasted from project spec
//All of these need to be expect statements

round.returnCurrentCard(); // => { first card1 }

round.turns; // => 0
round.turns; // => 2
// turns count should increase after take turn
round.incorrectGuesses;     // => []

round.takeTurn('sea otter'); // => 'correct!'
round.takeTurn('spleen');   // => 'incorrect!'
//take turn should update turns

round.incorrectGuesses;     // => [14]

round.returnCurrentCard(); // => { id: 12,}
round.calculatePercentCorrect(); // => 50
