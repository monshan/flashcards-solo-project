const Turn = require("./Turn")

class Round {
  constructor(deck) {
    this.deck = deck
    this.currentCard = deck.cards[0]
    this.incorrectGuesses = []
    this.turns = 0
  }

  returnCurrentCard = () => this.currentCard

  takeTurn = (userGuess) => {
    const userTurn = new Turn (userGuess, this.currentCard)
    if (!userTurn.evaluateGuess()) {
      this.incorrectGuesses.push(userTurn.currentCard.id)
    }
    this.turns++
    this.currentCard = this.deck.cards[this.turns]
    return userTurn.giveFeedback()
  }

  calculatePercentCorrect = () => Math.round(((this.turns - this.incorrectGuesses.length) / this.turns) * 100)

  endRound = () => `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
}

module.exports = Round;