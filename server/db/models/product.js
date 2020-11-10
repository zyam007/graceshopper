const Sequelize = require('sequelize')
const db = require('./db/db')

// READ ME: defining product model

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT
  },
  numOfSales: {
    type: Sequelize.INT
  },
  quantity: {
    type: Sequelize.INT
  },
  imageURL: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Product
