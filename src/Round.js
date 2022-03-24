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
    // console.log(roundResultMessage);
    return roundResultMessage;
  }
}

module.exports =
  Round;
