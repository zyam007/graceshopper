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

router.get('/:categoryId', async (req, res, next) => {
  const {categoryId} = req.params

  try {
    const singleCategory = await Category.findByPk(categoryId)
    res.json(singleCategory)
  } catch (err) {
    next(err)
  }
})

module.exports = router
