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
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    productQuantity: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
      validate: {
        min: 0
      }
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

OrderDetail.updateCartItem = function(productQuantity, productId, orderId) {
  return OrderDetail.update(
    {productQuantity: productQuantity},
    {
      where: {
        productId,
        orderId
      },
      returning: true
    }
  )
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
