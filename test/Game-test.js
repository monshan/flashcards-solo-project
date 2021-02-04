const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game')
const Round = require('../src/Round')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')
const Card = require('../src/Card')

const kdramaTrivia = prototypeData = [{
  "id": 1,
  "question": "In Crash Landing on You the male lead studies abroad to study what instrument?",
  "answers": ["violin", "piano", "cello"],
  "correctAnswer": "piano"
}, {
  "id": 2,
  "question": "In Startup what episode does the main couple have their first kiss?",
  "answers": ["4", "9", "5"],
  "correctAnswer": "5"
}, {
  "id": 3,
  "question": "In It's Okay Not to be Okay what is the female leads job before she quits?",
  "answers": ["author", "nurse", "teacher"],
  "correctAnswer": "author"
}, {
  "id": 4,
  "question": "In True Beauty what is the color of the school uniform worn by the main cast?",
  "answers": ["burgandy", "navy", "mustard"],
  "correctAnswer": "burgandy"
}, {
  "id": 5,
  "question": "What sub-genre is often associated with the actor Gong Yoo?",
  "answers": ["gothic", "romcom", "zombie"],
  "correctAnswer": "zombie"
}]

describe('Game Class', () => {
  it('Should be a function', () => {
    const game = new Game ()
    expect(game).to.be.an.instanceOf(Game)
  })

  it('should store the current round as an instance of the Round Class', () => {
    const game = new Game ()
    game.start()
    expect(game.currentRound).to.be.an.instanceOf(Round)
  })
})