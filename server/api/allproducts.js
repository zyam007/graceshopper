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

module.exports = router
