const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = 0;

  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  // testData(){
  //   return prototypeQuestions[0].correctAnswer;
  // }

  start(){
    // prototypeQuestions is an array of objects
    const flashCards =  [];  //an array of objects instances of Card // console.log('Length of flashCards array: ', flashCards.length)
    prototypeQuestions.forEach((dataObj) => {
      flashCards.push(new Card (dataObj.id, dataObj.question, dataObj.answers, dataObj.correctAnswer));
    });
    // console.log('Length of flashCards array: ', flashCards.length);

    const flashCardDeck =  new Deck(flashCards);
    console.log('Cards in the Deck: ', flashCardDeck.countCards());
    // prototypeQuestions.map((dataObj) => {
    //   //MDN ---- ({ key, value}) => ({ [key]: value }))
    // });

    // const roundInPlay = new Round(flashCardDeck);

    // if(!testing){
      // this.printMessage();
      // this.printQuestion();
    // }

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
