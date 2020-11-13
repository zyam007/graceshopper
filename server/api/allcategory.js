const Category = require('../db/models/category')
const router = require('express').Router()
const isAdminMiddleware = require('./adminMiddleware')
const Product = require('./allproducts')

router.get('/', async (req, res, next) => {
  try {
    const allCategories = await Category.findAll({
      include: Product
    })
    res.json(allCategories)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  const {id} = req.params

  try {
    const singleCategory = await Category.findByPk(id, {include: Product})
    res.json(singleCategory)
  } catch (err) {
    next(err)
  }
})

router.post('/', isAdminMiddleware, async (req, res, next) => {
  try {
    const newCategory = await Category.post(req.body)
    res.json(newCategory)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const {id} = req.params
    const category = await Category.findByPk(id)

    if (!category) return res.sendStatus(404)

    const updatedCategory = await category.update(req.body)
    res.status(204).send(updatedCategory)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    await Category.destroy({
      where: {
        id: req.params.id
      }
    })

    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router
