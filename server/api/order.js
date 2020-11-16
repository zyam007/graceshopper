const router = require('express').Router()
const {Order, OrderDetails, Product} = require('../db/index')
module.exports = router

router.put('/', async (req, res, next) => {
  try {
    const user = req.session.passport.user
    const cart = await Order.findOne({
      where: {
        userId: user,
        isComplete: false
      }
    })

    req.body.cart.cartItems.forEach(async cartItem => {
      const item = await Product.findByPk(cartItem.productId)
      item.update({quantity: item.quantity - cartItem.quantity})
    })

    cart.update({
      totalAmount: req.body.cart.total,
      isComplete: true
    })

    res.json(cart)
  } catch (error) {
    next(error)
  }
})
