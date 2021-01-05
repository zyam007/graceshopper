const router = require('express').Router()
const {Order, Product, User, OrderDetail} = require('../db/index')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const user = req.user.id

    const cartSession = await Order.getPendingOrder(user)

    res.json(cartSession[0])
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const user = req.user.id
    const cart = await Order.getPendingOrder(user)
    for (let i = 0; i < req.body.cart.cartItems.length; i++) {
      let cartItem = req.body.cart.cartItems[i]

      const item = await Product.findByPk(cartItem.productId)
      await item.update({quantity: item.quantity - cartItem.quantity})
    }

    //how do we update the history for the past items?
    //-> update the order details for each cart item to match what the store cart has

    await cart.update({
      totalAmount: req.body.cart.total,
      isComplete: true
    })

    res.json(cart)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const cart = req.body.cart
    const user = await User.create(req.body.user)
    const totalAmount = cart.total
    const userId = user.id
    const isComplete = true
    const order = await Order.create({totalAmount, userId, isComplete})
    const orderId = order.id
    const cartItems = cart.cartItems
    for (let i = 0; i < cartItems.length; i++) {
      let productQuantity = cart.quantity[cartItems[i].id]
      //let total = productQuantity * cartItems[i].price
      let productId = cartItems[i].id

      await OrderDetail.create({
        productQuantity,
        productId,
        orderId
      })
    }

    res.json(order)
    //make user id
  } catch (err) {
    next(err)
  }
})
