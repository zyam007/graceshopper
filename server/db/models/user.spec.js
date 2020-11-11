/* global describe beforeEach it */

const {expect} = require('chai')
const {db} = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          firstName: 'Cody',
          lastName: 'Pup',
          email: 'cody@puppybook.com',
          password: 'bones!'
        })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones!')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bone!')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
  describe('User has first name and last name', () => {
    let cody

    beforeEach(async () => {
      cody = await User.create({
        firstName: 'Cody',
        lastName: 'Pup',
        email: 'cody@puppybook.com',
        password: 'bones!'
      })
    })

    it('User has a valid first name', () => {
      expect(cody.firstName).not.to.equal(null)
      expect(typeof cody.firstName).to.be.a('string')
      expect(cody.firstName).to.equal('Cody')
    })

    it('User has a valid last name', () => {
      expect(cody.lastName).not.to.equal(null)
      expect(typeof cody.lastName).to.be.a('string')
      expect(cody.lastName).to.equal('Pup')
    })
  }) //end describe user has first name and last name

  describe('User has an email', () => {
    let cody

    beforeEach(async () => {
      cody = await User.create({
        firstName: 'Cody',
        lastName: 'Pup',
        email: 'cody@puppybook.com',
        password: 'bones!'
      })
    })

    it('User email has the correct format', () => {
      let result = cody.email.includes('@')
      expect(result).to.be.a('boolean')
      expect(result).to.equal(true)
      expect(cody.email).to.equal('cody@puppybook.com')
    })
  }) //end email tests
}) // end describe('User model')
