const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  totalAmount: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  isComplete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Order
