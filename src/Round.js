const Turn = require("./Turn")

class Round {
  constructor(deck) {
    this.deck = deck
    this.currentCard = deck.set[0]
    this.incorrectGuesses = []
    this.turnCount = 0
  }

  returnCurrentCard = () => this.currentCard

  takeTurn = (userGuess) => {
    const userTurn = new Turn (userGuess, this.currentCard)
    if (!userTurn.evaluateGuess()) {
      this.incorrectGuesses.push(userTurn.currentCard.id)
    }
    this.turnCount++
    this.currentCard = this.deck.set[this.turnCount]
    return userTurn.giveFeedback()
  }

  calculatePercentCorrect = () => Math.round(((this.turnCount - this.incorrectGuesses.length) / this.turnCount) * 100)

  endRound = () => `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
}

module.exports = Round;

// Your Round class will be the object that takes in responses and records these guesses (as well as if they are correct or incorrect). The currentCard should be the first Card in the Deck (the array of Cards) at the start of the Round

// Your Round class should meet the following requirements:
// returnCurrentCard: method that returns the current card being played
// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

// When a guess is made, a new Turn instance is created.
// The turns count is updated, regardless of whether the guess is correct or incorrect
// The next card becomes current card
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct

// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’