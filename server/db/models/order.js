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

Order.getPendingOrder = function(userId) {
  return Order.findOrCreate({
    where: {
      userId,
      isComplete: false
    }
  })
}
module.exports = Order
