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
    productQuantity: Sequelize.INTEGER
  },
  {timestamp: false}
)

User.hasMany(Order)
Order.belongsTo(User)
Product.belongsToMany(Order, {through: OrderDetail})
Order.belongsToMany(Product, {through: OrderDetail})
Product.belongsTo(Category)
Category.hasMany(Product)

module.exports = {
  db,
  User,
  Order,
  Product,
  Category,
  OrderDetail
}
