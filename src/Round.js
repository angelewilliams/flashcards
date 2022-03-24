const Turn = require('../src/Turn');

class Round {
  constructor(deckOfFlashcards){
    this.deck = deckOfFlashcards;
    this.incorrectGuesses = [];
    this.turns = 0;
    this.currentCard = this.deck.cards[0];
  }
  returnCurrentCard(){
    return this.currentCard;
  }
  takeTurn(guess){
    const turn = new Turn(guess, this.currentCard);
    this.turns++;
    this.currentCard = this.deck.cards[this.turns]
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
    const roundResultMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    console.log(roundResultMessage);
    return roundResultMessage;
  }
}

module.exports =
  Round;
