const chai = require('chai')
const expect = chai.expect
const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')


describe('Round Class', () => {
  it('should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of the Round class', () => {
    const card32 = new Card (
      32,
      'What year did BTS debut?',
      ['2012', '2013', '2014'],
      '2013')
    const deck = new Deck ([card32])
    const round = new Round (deck)
    expect(round).to.be.an.instanceOf(Round)
  })

  it('should be able to have a deck', () => {
    const card32 = new Card (
      32,
      'What year did BTS debut?',
      ['2012', '2013', '2014'],
      '2013')
    const deck = new Deck([card32])
    const round = new Round(deck)
    expect(round.deck).to.deep.equal(deck)
  })

  it('should store the deck as an instance of the Deck class', () => {
    const card32 = new Card (
      32,
      'What year did BTS debut?',
      ['2012', '2013', '2014'],
      '2013')
    const deck = new Deck([card32])
    const round = new Round(deck)
    expect(round.deck).to.be.an.instanceOf(Deck)
  })

  it('should be able to have any deck', () => {
    const card78 = new Card (
      78,
      'What is the Pantone Color of the Year for 2021?',
      ['Serenity Blue', 'Living Coral', 'Ultimate Grey'],
      'Ultimate Grey')
    const diffDeck = new Deck ([card78])
    const round = new Round (diffDeck)
    expect(round.deck).to.deep.equal(diffDeck)
  })

  it('should be able to return the current card', () => {
    const card32 = new Card (
      32,
      'What year did BTS debut?',
      ['2012', '2013', '2014'],
      '2013')
    const card78 = new Card (
      78,
      'What is the Pantone Color of the Year for 2021?',
      ['Serenity Blue', 'Living Coral', 'Ultimate Grey'],
      'Ultimate Grey')
    const deck = new Deck([card32, card78])
    const round = new Round(deck)
    expect(round.returnCurrentCard()).to.deep.equal(card32)
  })

  it('should be able to calculate the percentage of correct guesses', () => {
    const card32 = new Card (
      32,
      'What year did BTS debut?',
      ['2012', '2013', '2014'],
      '2013')
    const card78 = new Card (
      78,
      'What is the Pantone Color of the Year for 2021?',
      ['Serenity Blue', 'Living Coral', 'Ultimate Grey'],
      'Ultimate Grey')
    const deck = new Deck ([card32, card78])
    const round = new Round (deck)
    round.takeTurn('2013')
    round.takeTurn('Living Coral')
    expect(round.calculatePercentCorrect()).to.deep.equal(50)
  })

  it('should be able to end the round with a dynamic message', () => {
    const card32 = new Card (
      32,
      'What year did BTS debut?',
      ['2012', '2013', '2014'],
      '2013')
    const card78 = new Card (
      78,
      'What is the Pantone Color of the Year for 2021?',
      ['Serenity Blue', 'Living Coral', 'Ultimate Grey'],
      'Ultimate Grey')
    const deck = new Deck ([card32, card78])
    const round = new Round (deck)
    round.takeTurn('2013')
    round.takeTurn('Living Coral')
    expect(round.endRound()).to.deep.equal(
      "** Round over! ** You answered 50% of the questions correctly!")
  })

  describe('takeTurn method', () => {
    it('should increment turn count regardless of guess accuracy', () => {
      const card32 = new Card (
        32,
        'What year did BTS debut?',
        ['2012', '2013', '2014'],
        '2013')
      const card78 = new Card (
        78,
        'What is the Pantone Color of the Year for 2021?',
        ['Serenity Blue', 'Living Coral', 'Ultimate Grey'],
        'Ultimate Grey')
      const deck = new Deck ([card32, card78])
      const round = new Round (deck)
      round.takeTurn('2013')
      round.takeTurn('Living Coral')
      expect(round.turns).to.deep.equal(2)
    })
  
    it('should change the current card after a guess', () => {
      const card32 = new Card (
        32,
        'What year did BTS debut?',
        ['2012', '2013', '2014'],
        '2013')
      const card78 = new Card (
        78,
        'What is the Pantone Color of the Year for 2021?',
        ['Serenity Blue', 'Living Coral', 'Ultimate Grey'],
        'Ultimate Grey')
      const deck = new Deck ([card32, card78])
      const round = new Round (deck)
      round.takeTurn()
      expect(round.returnCurrentCard()).to.deep.equal(card78)
    })
  
    it('should be able to store incorrect guesses', () => {
      const card32 = new Card (
        32,
        'What year did BTS debut?',
        ['2012', '2013', '2014'],
        '2013')
      const card78 = new Card (
        78,
        'What is the Pantone Color of the Year for 2021?',
        ['Serenity Blue', 'Living Coral', 'Ultimate Grey'],
        'Ultimate Grey')
      const deck = new Deck ([card32, card78])
      const round = new Round (deck)
      round.takeTurn('2013')
      expect(round.incorrectGuesses).to.deep.equal([])
      round.takeTurn('Living Coral')
      expect(round.incorrectGuesses).to.deep.equal([card78.id])
    })

    it('should store incorrect guesses as an array', () => {
      const card32 = new Card (
        32,
        'What year did BTS debut?',
        ['2012', '2013', '2014'],
        '2013')
      const card78 = new Card (
        78,
        'What is the Pantone Color of the Year for 2021?',
        ['Serenity Blue', 'Living Coral', 'Ultimate Grey'],
        'Ultimate Grey')
      const deck = new Deck ([card32, card78])
      const round = new Round (deck)
      round.takeTurn('2013')
      expect(round.incorrectGuesses).to.be.an('array')
    })
  
    it('should be able to give accurate feedback', () => {
      const card32 = new Card (
        32,
        'What year did BTS debut?',
        ['2012', '2013', '2014'],
        '2013')
      const card78 = new Card (
        78,
        'What is the Pantone Color of the Year for 2021?',
        ['Serenity Blue', 'Living Coral', 'Ultimate Grey'],
        'Ultimate Grey')
      const deck = new Deck ([card32, card78])
      const round = new Round (deck)
      expect(round.takeTurn('2013')).to.deep.equal('correct!')
      expect(round.takeTurn('2014')).to.deep.equal('incorrect!')
    })
  })
})