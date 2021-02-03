const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn')

describe('Turn Class', () => {

  it('should be a function', () => {
    const turn = new Turn()
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of the Turn class', () => {
    const turn = new Turn()
    expect(turn).to.be.an.instanceOf(Turn)
  })

  it('should store a users guess as a string', () => {
    const turn  = new Turn ('A throw away guess')
    expect(turn.guess).to.be.a('string')
  })
  
  it('should store any users guess as a string', () => {
    const turn  = new Turn ('Some other user guess')
    expect(turn.guess).to.equal('Some other user guess')
  })

  it('should store the current card as an object', () => {
    const card32 = new Card (32, 'What year did BTS debut?', ['2012', '2013', '2014'], '2013')
    const turn = new Turn ('The user guess', card32)
    expect(turn.currentCard).to.be.a('object')
  })

  it('the card being stored as current card should be an instance of the card class', () => {
    const card32 = new Card (32, 'What year did BTS debut?', ['2012', '2013', '2014'], '2013')
    const turn = new Turn ('The user guess', card32)
    expect(turn.currentCard).to.be.an.instanceOf(Card)
  })

  it('should store any card as the current card', () => {
    const card47 = new Card (47, 'What is the name of the Chinese Drama Eternal Love female protagonist?', ['Fengjiu', 'Yehua', 'Baiqian'], 'Baiqian')
    const turn = new Turn ('The user guess', card47)
    expect(turn.currentCard).to.deep.equal(card47)
  })

  it('should be able to return the users guess', () => {
    const card32 = new Card (32, 'What year did BTS debut?', ['2012', '2013', '2014'], '2013')
    const turn = new Turn ('Combination pizza hut and taco bell', card32)
    expect(turn.returnGuess()).to.deep.equal('Combination pizza hut and taco bell')
  })

  it('should be able to return the current card', () => {
    const card32 = new Card (32, 'What year did BTS debut?', ['2012', '2013', '2014'], '2013')
    const turn = new Turn ('Bodyadiyadiyadi', card32)
    expect(turn.returnCard()).to.deep.equal(card32)
  })

  it('should be able to accurately evaluate the users guess as true or false', () => {
    const card32 = new Card (32, 'What year did BTS debut?', ['2012', '2013', '2014'], '2013')
    const turnTrue = new Turn ('2013', card32)
    const turnFalse = new Turn ('2014', card32)
    expect(turnTrue.evaluateGuess()).to.deep.equal(true)
    expect(turnFalse.evaluateGuess()).to.deep.equal(false)
  })

  it('should be able to return a specific message based on accuracy of the users guess', () => {
    const card32 = new Card (32, 'What year did BTS debut?', ['2012', '2013', '2014'], '2013')
    const turnTrue = new Turn ('2013', card32)
    const turnFalse = new Turn ('2014', card32)
    expect(turnTrue.giveFeedback()).to.deep.equal('correct!')
    expect(turnFalse.giveFeedback()).to.deep.equal('incorrect!')
  })

})