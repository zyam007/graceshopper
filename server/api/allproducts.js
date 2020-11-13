const Product = require('../db/models/product')
const Category = require('../db/models/category')
const isAdminMiddleware = require('./adminMiddleware')
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

router.post('/', isAdminMiddleware, async (req, res, next) => {
  try {
    const newProduct = await Product.post(req.body)
    res.json(newProduct)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const {id} = req.params
    const product = await Product.findByPk(id)

    if (!product) return res.sendStatus(404)

    const updatedProduct = await product.update(req.body)
    res.status(204).send(updatedProduct)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    await Product.destroy({
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
