const chai = require('chai');
const expect = chai.expect;
// const data = require('./data');
// const prototypeQuestions = data.prototypeData;


const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
  let card1, card2, card3, deck, round, game, startGame;
  beforeEach(() => {
     card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
     card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
     card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
     deck = new Deck([card1, card2, card3]);
     round = new Round(deck);
     game = new Game();

  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be instantiate a round', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('start method should create Cards', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('start method should puts Cards in a Deck', () => {
    game.start();

  });

  it.skip('start method should do create a new Round', () => {

  });

  it('should keep track of current round', () => {
    expect(game.currentRound).to.equal(0)
    // game.start();
    // expect(game.currentRound).to.equal(1);

  });

  // it('testData should do something', () => {
  //   expect(game.testData()).to.equal("object")
  // });

  it.skip('something should do something', () => {

  });
});
