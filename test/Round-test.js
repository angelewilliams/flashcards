const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1, card2, card3, deck, round;
  beforeEach(() => {
     card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
     card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
     card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
     deck = new Deck([card1, card2, card3]);
     round = new Round(deck);
  });

  it('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be instantiate a round', () => {
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should accept a deck as the input', () => {

    expect(round.deck).to.equal(deck);
  });

  it('returnCurrentCard should return the current card being played', () => {
    expect(round.returnCurrentCard(round.turns)).to.equal(card1);
    round.takeTurn('pug');
    expect(round.returnCurrentCard(round.turns)).to.equal(card2);
  });

  it('takeTurn should update turns count', () => {
    expect(round.turns).to.equal(0);
    round.takeTurn();
    expect(round.turns).to.equal(1);
  });

  it('takeTurn should evaluate guesses and give feedback', () => {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
  });

  it('takeTurn should store ids of incorrect guesses in an array', () => {

    round.takeTurn('sea otter');
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn('spleen');
    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it('calculatePercentCorrect should calculate what number of guesses were correct', () => {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('Lex');
    expect(round.calculatePercentCorrect()).to.equal(34)
  });

  it('something should do something', () => {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!')
  });

});
