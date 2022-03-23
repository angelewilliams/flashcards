const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store user guess from input', function(){
    const turn = new Turn('flamingo');
    expect(turn.userGuess).to.equal('flamingo');
  });

  it('should be able to reference current flashcard', function(){
    const card = new Card(1, 'What is the best pool floatie shape', ['donut', 'flamingo', 'pinapple pizza', 'bagel'], 'bagel');
    const turn = new Turn('flamingo', card);
    expect(turn.currentCard).to.equal(card);
  });

  it('returnGuess method should return the string of the user guess', function(){
    const turn = new Turn('flamingo');
    expect(turn.returnGuess()).to.equal('flamingo');
  });

  it('returnCard method should return the current card object', function(){
    const card = new Card(1, 'What is the best pool floatie shape', ['donut', 'flamingo', 'pinapple pizza', 'bagel'], 'bagel');
    const turn = new Turn('flamingo', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('evaluateGuess method should return a boolean of whether userGuess is correct', function(){
    const card = new Card(1, 'What is the best pool floatie shape', ['donut', 'flamingo', 'pinapple pizza', 'bagel'], 'bagel');
    const turn = new Turn('flamingo', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('giveFeedback method should return "incorrect!" or "correct!" based on evaluateGuess boolean', function(){
    const card = new Card(1, 'What is the best pool floatie shape', ['donut', 'flamingo', 'pinapple pizza', 'bagel'], 'bagel');
    const turn = new Turn('flamingo', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

});
