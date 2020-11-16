const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/allproducts', require('./allproducts'))
router.use('/allcategory', require('./allcategory'))
router.use('/order', require('./order'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
