const router = require('express').Router()
const {OrderDetail, Order} = require('../db/index')

//find your pending cart order through your user id
//added two helper methors to the Order and OrderDetails models to getPedingOrder for the cart, and to getCartItems also for cart

//checked and
router.get('/', async (req, res, next) => {
  try {
    const userId = req.user.id
    //get the cart
    const cartSession = await Order.getPendingOrder(userId)
    console.log('cart session', cartSession[0].dataValues.id)
    const orderId = cartSession[0].dataValues.id
    //this will show you the cart in the api route
    // res.json(cartSession[0])

    //now I want to send the cartItems
    const cartItems = await OrderDetail.getCartItems(orderId)

    res.json(cartItems)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    //find the user
    const userId = req.user.id
    //get the cart
    const cartSession = await Order.getPendingOrder(userId)

    const newCartItem = await OrderDetail.create({
      orderId: cartSession[0].id,
      productId: req.body.id
    })

    res.status(201).json(newCartItem)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    //find the user
    const userId = req.user.id
    //get the cart
    const cartSession = await Order.getPendingOrder(userId)
    const result = await OrderDetail.updateCartItem(
      req.body.productQuantity,
      req.body.productId,
      cartSession[0].id
    )
    let cartItem = result[1][0]
    res.json(cartItem)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    //find the user
    const userId = req.user.id
    //get the cart
    const cartSession = await Order.getPendingOrder(userId)
    //find the product you are removing
    const cartItem = await OrderDetail.findOne({
      where: {
        id: req.params.id,
        productId: req.params.id,
        orderId: cartSession[0].id
      }
    })

    if (!cartItem) return res.sendStatus(404)
    //destroy it
    await cartItem.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
module.exports = router
