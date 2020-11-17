const db = require('./db')
const Sequelize = require('sequelize')
// register models
//const {User, Product, Category} = require('./models')
const User = require('./models/user')
const Order = require('./models/order')
const Product = require('./models/product')
const Category = require('./models/category')

const OrderDetail = db.define(
  'orderDetail',
  {
    productQuantity: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    }
  },
  {timestamp: false}
)

OrderDetail.getCartItems = async function(orderId) {
  console.log('in the model', orderId)
  const items = await OrderDetail.findAll({
    where: {
      orderId: orderId
    },
    include: Product
  })
  console.log('in the model details', items.length)
  const cartItems = items.length ? items : []
  return cartItems
}

OrderDetail.updateCartItem = function(productId, orderId) {
  return OrderDetail.findAll({
    where: {
      productId,
      orderId
    }
  })
}

User.hasMany(Order)
Order.belongsTo(User)
Product.belongsToMany(Order, {through: OrderDetail})
Order.belongsToMany(Product, {through: OrderDetail})
Product.belongsTo(Category)
Category.hasMany(Product)
OrderDetail.belongsTo(Product)

module.exports = {
  db,
  User,
  Order,
  Product,
  Category,
  OrderDetail
}
