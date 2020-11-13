const {expect} = require('chai')
const request = require('supertest')
const {db} = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('All Products routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/allproducts/', () => {
    beforeEach(() => {
      return Product.create({
        name: 'Food keycap',
        description: 'buy me!',
        price: 12.99,
        numOfSales: 5,
        quantity: 12
      })
    })

    it('GET /api/allproducts', async () => {
      const res = await request(app)
        .get('/api/allproducts')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal('Food keycap')
    })
  })

  describe('/api/allproducts/:id', () => {
    beforeEach(() => {
      return Product.create({
        name: 'Food keycap',
        description: 'buy me!',
        price: 12.99,
        numOfSales: 5,
        quantity: 12
      })
    })

    it('GET /api/allproducts/1', async () => {
      const res = await request(app)
        .get('/api/allproducts/1')
        .expect(200)

      expect(res.body).to.be.an('Object')
      expect(res.body.price).to.be.equal(12.99)
    })
  })
})
