const Product = require('../db/models/product')
const Category = require('../db/models/category')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll()
    res.json(allProducts)
  } catch (err) {
    next(err)
  }
})

router.get('/:productId', async (req, res, next) => {
  const {productId} = req.params

  try {
    const singleProduct = await Product.findByPk(productId)
    res.json(singleProduct)
  } catch (err) {
    next(err)
  }
})

module.exports = router
