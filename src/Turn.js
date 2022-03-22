const Card = require('../src/Card');


class Turn {
  constructor(userGuess, card){
    this.userGuess = userGuess;
    this.currentCard = card;
    this.guessedCorrectly;
  }
  returnGuess(){
    return this.userGuess;
  }
  returnCard(){
    return this.currentCard;
  }
  evaluateGuess(){
    //maybe refactor to switch statement later
    if(this.userGuess === this.currentCard.correctAnswer){
      this.guessedCorrectly = true;
    }
    else { this.guessedCorrectly = false;}
    return this.guessedCorrectly;
  }
  giveFeedback(){
    //maybe refactor to switch statement later
    if(this.guessedCorrectly){
      return 'correct!'
    }
    return 'incorrect!'
  }
}

module.exports =
 Turn;


//Turn Class Notes
//Instantiated with two arguments - a string (that represents a user’s guess to the question), and a Card object for the current card in play.

 // returnGuess: method that returns the guess
 // returnCard: method that returns the Card
 // evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
 // giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
