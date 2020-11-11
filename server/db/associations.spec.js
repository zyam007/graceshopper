const {expect} = require('chai')
const {db} = require('./index')
const User = db.model('user')
const Product = db.model('product')
const Category = db.model('category')

describe('Associations', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('eager loading', () => {
    let categories = [
      {name: 'food'},
      {name: 'fauna'},
      {name: 'flora'},
      {name: 'movie_tv'},
      {name: 'games'},
      {name: 'holiday'}
    ]

    let products = [
      {
        name: 'Key Cap',
        description: 'artisan keycap',
        price: 9.99,
        quantity: 1,
        categoryId: 1
      },
      {
        name: 'Yoda Key Cap',
        description: 'artisan keycap',
        price: 19.99,
        quantity: 1,
        categoryId: 1
      }
    ]
    let category

    beforeEach(async () => {
      await Category.bulkCreate(categories)
      await Product.bulkCreate(products)
      category = await Category.findAll({
        include: Product
      })
    })

    it('returns the all category names', () => {
      let result = category.map(type => type.name)

      expect(result).to.have.lengthOf(6)
    })

    it('eager loads all products in each category', () => {
      let firstProducts = category[0].products
      // let result = product.filter(item => item.name === 'Key Cap');
      console.log(firstProducts)
      expect(Array.isArray(firstProducts)).to.be.equal(true)
      expect(firstProducts).to.have.lengthOf(2)
    })
  }) // end of describe('eager loading)
})
