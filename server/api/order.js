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

    req.body.forEach(async cartItem => {
      const total = await Product.findByPk(cartItem.productId)
      total.update({quantity: total.quantity - cartItem.quantity})
    })

    req.body.forEach(async cartItem => {
      const order = await OrderDetails.findOne({
        where: {
          productId: cartItem.productId,
          orderId: cartItem.orderId
        }
      })
      order.update({price: cartItem.product.price})
    })

    cart.update({isComplete: true})
    res.json(cart)
  } catch (error) {
    next(error)
  }
})
