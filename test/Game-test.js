const chai = require('chai');
const expect = chai.expect;
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

  it('should create new instances of a card when game starts', () => {
   game.start(false);
   expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
 });

 it('should create a new instance of deck when game starts', () => {
   game.start(false);
   expect(game.currentRound.deck).to.be.an.instanceof(Deck);
 });

 it('should create a new instance of a round when game starts', () => {
   game.start(false);
   expect(game.currentRound).to.be.an.instanceof(Round);
 });

});
