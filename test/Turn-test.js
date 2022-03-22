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
  it('should store current card from input', function(){
    const card = new Card(1, 'What is the best pool floatie shape', ['donut', 'flamingo', 'pinapple pizza'], 'pinapple pizza');
    const turn = new Turn('flamingo', card);
    expect(turn.currentCard).to.equal(card);
  });

});
