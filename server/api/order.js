const router = require('express').Router()
const {Order, Product, User, OrderDetail} = require('../db/index')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    console.log('in order', req.session)
    const user = req.session.passport.user

    const cartSession = await Order.getPendingOrder(user)

    res.json(cartSession[0])
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const user = req.session.passport.user
    const cart = await Order.getPendingOrder(user)

    req.body.cart.cartItems.forEach(async cartItem => {
      const item = await Product.findByPk(cartItem.productId)
      item.update({quantity: item.quantity - cartItem.quantity})
    })

    //how do we update the history for the past items?
    //-> update the order details for each cart item to match what the store cart has

    cart.update({
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
