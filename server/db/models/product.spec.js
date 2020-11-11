const {expect} = require('chai')
const {db} = require('../index')
const Product = db.model('product')
const Order = db.model('order')
const User = db.model('user')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Product Model test', () => {
    let keyCap

    beforeEach(async () => {
      keyCap = await Product.create({
        name: 'Awesome keycap',
        price: 50.95
      })
    })

    it('Product name is defined', () => {
      expect(keyCap.name).not.to.equal(null)
      expect(keyCap.name).to.equal('Awesome keycap')
    })

    it('checks that price is a float type', () => {
      expect(keyCap.price % 1).not.to.equal(0)
    })
  })
}) // end describe('Product model')

describe('Order model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  let order1

  beforeEach(async () => {
    order1 = await Order.create({
      totalAmount: 15.85,
      isComplete: true
    })
  })

  it('has total amount defined', () => {
    expect(order1.totalAmount).to.be.equal(15.85)
  })
})
