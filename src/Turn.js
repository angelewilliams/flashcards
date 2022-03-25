class Turn {
  constructor(userGuess, card){
    this.userGuess = userGuess;
    this.currentCard = card;
  }
  returnGuess(){
    return this.userGuess;
  }
  returnCard(){
    return this.currentCard;
  }
  evaluateGuess(){
   return this.userGuess === this.currentCard.correctAnswer;
  }
  giveFeedback(){
    if(this.evaluateGuess()){
      return 'correct!';
    }
    return 'incorrect!';
  }
}

module.exports =
  Turn;
