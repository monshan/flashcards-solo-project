const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game')
const Round = require('../src/Round')

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