const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start(){
    const flashCards =  [];
    prototypeQuestions.forEach((dataObj) => {
      flashCards.push(new Card (dataObj.id, dataObj.question, dataObj.answers, dataObj.correctAnswer));
    });
    const deck =  new Deck(flashCards);
    this.currentRound = new Round(deck);
    // this.printMessage(deck, this.currentRound);
    // this.printQuestion(this.currentRound);

  }

}

module.exports =
  Game;


// Your Game class should meet these other requirements:
//
// Should keep track of the currentRound
// start: method that starts everything
// >>Creates Cards
// >>Puts Cards in a Deck
// >>Creates a new Round using the Deck
// >>invokes printMessage to display the message in the CLI
// >>invokes printQuestion to kick off our helper functions that allow interaction via the CLI
//
// Your game.start() method should be invoked to make the game playable.
