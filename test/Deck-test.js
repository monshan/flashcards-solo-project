const chai = require('chai')
const expect = chai.expect
const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe('Deck Class', () => {
  it('should be a function', () => {
    expect(Deck).to.be.a('function')
  })

  it('should be an instance of the Deck class', () => {
    const deck = new Deck()
    expect(deck).to.be.an.instanceOf(Deck)
  })

  it('should be able to count how many cards are in the deck', () => {
    const card32 = new Card (32, 'What year did BTS debut?', ['2012', '2013', '2014'], '2013')
    const card47 = new Card (47, 'What is the name of the Chinese Drama Eternal Love female protagonist?', ['Fengjiu', 'Yehua', 'Baiqian'], 'Baiqian')
    const card78 = new Card (78, 'What is the Pantone Color of the Year for 2021?', ['Serenity Blue', 'Living Coral', 'Ultimate Grey'], 'Ultimate Grey' )
    const deck = new Deck([card32, card47, card78])
    expect(deck.countCards()).to.deep.equal(3)
  })
})