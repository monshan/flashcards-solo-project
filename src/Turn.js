class Turn {
  constructor(guess, card) {
    this.guess = guess
    this.currentCard = card
  }

  returnGuess = () => this.guess

  returnCard = () => this.currentCard

  evaluateGuess = () => {
    return this.guess === this.currentCard.correctAnswer ? true : false
  }

  giveFeedback = () => {
    return this.evaluateGuess() ? 'correct!' : 'incorrect!'
  }
}

module.exports = Turn;