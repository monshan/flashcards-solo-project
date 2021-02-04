const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')

class Game {
  constructor() {
    this.currentRound = null
  }

  start = () => {
    const convertCards = []
    prototypeQuestions.forEach((card) => {
      convertCards.push(new Card (card.id, card.question, card.answers, card.correctAnswer))
    })
    const convertDeck = new Deck (convertCards)
    this.currentRound = new Round (convertDeck)
    this.printMessage(convertDeck, this.currentRound)
    this.printQuestion(this.currentRound)
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;

// Your Game class should meet these other requirements:
// Should keep track of the currentRound
// start: method that starts everything
// Creates Cards
// Puts Cards in a Deck
// Creates a new Round using the Deck