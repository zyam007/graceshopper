const Category = require('../db/models/category')
const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
    const allCategories = await Category.findAll()
    res.json(allCategories)
  } catch (err) {
    next(err)
  }
})

module.exports = router
