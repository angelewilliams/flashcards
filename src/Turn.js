const Card = require('../src/Card');


class Turn {
  constructor(userGuess, card){
    this.userGuess = userGuess;
    this.currentCard = card;
  }
}

module.exports =
 Turn;


 // returnGuess: method that returns the guess
 // returnCard: method that returns the Card
 // evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
 // giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
