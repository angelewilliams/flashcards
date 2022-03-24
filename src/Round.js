const Turn = require('../src/Turn');


class Round {
  constructor(deckOfFlashcards){
    this.deck = deckOfFlashcards;
    this.incorrectGuesses = [];
    this.turns = 0;
  }
  returnCurrentCard(turnNum){
    return this.deck.cards[turnNum];
  }
  takeTurn(guess){
    const turn = new Turn(guess, this.returnCurrentCard(this.turns));
    this.turns++;
    if(!turn.evaluateGuess()){
      this.incorrectGuesses.push(turn.currentCard.id)
    }

    return turn.giveFeedback();

  }
  calculatePercentCorrect(){
    const incorrectGuesses = this.incorrectGuesses.length;
    const totalGuesses = this.turns;
    const percentageCorrect = 100 - (Math.floor((incorrectGuesses / totalGuesses) * 100));
    return percentageCorrect;
  }
  endRound(){
    const percentageCorrect = this.calculatePercentCorrect();
    const roundResultMessage = `** Round over! ** You answered ${percentageCorrect}% of the questions correctly!`;
    console.log(roundResultMessage);
    return roundResultMessage;
  }
}

module.exports =
  Round;
//The currentCard should be the first Card in the Deck (the array of Cards) at the start of the Round
//
// Your Round class should meet the following requirements:

// returnCurrentCard: method that returns the current card being played

// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

// The turns count is updated, regardless of whether the guess is correct or incorrect
// THE NEXT CARD BECOMES THE CURRENT CARD
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct
// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
