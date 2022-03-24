const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card1, turn;
  beforeEach(() => {
     card1 = new Card(1, 'What is the best pool floatie shape', ['donut', 'flamingo', 'pinapple pizza', 'bagel'], 'bagel');
     turn = new Turn();
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store user guess from input', function(){
    turn = new Turn('flamingo');
    expect(turn.userGuess).to.equal('flamingo');
  });

  it('should be able to reference current flashcard', function(){
    turn = new Turn('flamingo', card1);
    expect(turn.currentCard).to.equal(card1);
  });

  it('returnGuess method should return the string of the user guess', function(){
    turn = new Turn('flamingo');
    expect(turn.returnGuess()).to.equal('flamingo');
  });

  it('returnCard method should return the current card object', function(){
    turn = new Turn('flamingo', card1);
    expect(turn.returnCard()).to.equal(card1);
  });

  it('evaluateGuess method should return a boolean of whether userGuess is correct', function(){
    turn = new Turn('flamingo', card1);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('giveFeedback method should return "incorrect!" or "correct!" based on evaluateGuess boolean', function(){
    turn = new Turn('flamingo', card1);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
  
});
