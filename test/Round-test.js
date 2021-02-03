const chai = require('chai')
const expect = chai.expect
const Round = require('../src/Round')

describe('Round Class', () => {
  it('should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of the Round class', () => {
    const round = new Round()
    expect(round).to.be.an.instanceOf(Round)
  })

  it('should increment turn count regardless of guess accuracy')

  it('should change the current card to the next card in the deck once a guess is made')

  it('should be able to store incorrect guesses')

  it('should be able to give feedback')

  it('should be able to calculate the percentage of correct guesses')

  it('should be able to end the round')
})