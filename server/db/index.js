const db = require('./db')
const Sequelize = require('sequelize')
// register models
const {User, Order, Product, Category} = require('./models')

const OrderDetail = Sequelize.define(
  'orderDetail',
  {
    productQuantity: Sequelize.INTEGER
  },
  {timestamp: false}
)

User.hasMany(Order)
Order.belongsTo(User)
Product.belongsToMany(Order, {through: orderDetail})
Order.belongsToMany(Product, {through: orderDetail})
Product.belongsTo(Category)
Category.hasMany(Product)

module.exports = {
  db,
  User,
  Order,
  Product,
  Category,
  OrderDetails
}
