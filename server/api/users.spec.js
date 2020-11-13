/* global describe beforeEach it */

//Need to work on testing with cookies and session
const {expect} = require('chai')
const request = require('supertest')
const {db} = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return User.create({
        firstName: 'Cody',
        lastName: 'Pup',
        email: codysEmail,
        password: '1234567',
        userType: 'admin',
        isAdmin: true
      })
    })

    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].email).to.be.equal(codysEmail)
    })
  }) // end describe('/api/users')

  describe('/api/users/:id', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return User.create({
        firstName: 'Cody',
        lastName: 'Pup',
        email: codysEmail,
        password: '1234567',
        userType: 'admin',
        isAdmin: true
      })
    })

    it('GET /api/users', async () => {
      await request(app)
        .get('/api/users/1')
        .expect(401)
    })
  }) // end describe('/api/users/:id')
}) // end describe('User routes')
