const Turn = require("./Turn")

class Round {
  constructor(deck) {
    this.deck = deck
    this.currentCard = this.deck.cards[0]
    this.incorrectGuesses = []
    this.turns = 0
  }

  returnCurrentCard () {
    return this.currentCard
  }

  takeTurn (userGuess) {
    const userTurn = new Turn (userGuess, this.currentCard)
    if (!userTurn.evaluateGuess()) {
      this.incorrectGuesses.push(userTurn.currentCard.id)
    }
    this.turns++
    this.currentCard = this.deck.cards[this.turns]
    if (this.turns === this.deck.cards.length) {
      return userTurn.giveFeedback(), this.endRound()
    } else {
      return userTurn.giveFeedback()
    }
  }

  calculatePercentCorrect () {
    return Math.round (
      ((this.turns - this.incorrectGuesses.length) / this.turns) * 100
    )
  } 

  endRound () {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;