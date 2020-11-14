const Sequelize = require('sequelize')
const db = require('../db')

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
    type: Sequelize.DOUBLE
  },
  numOfSales: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0.0
    }
  },
  imageUrl: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRR_X_QkxnyC_FJtYFgqyCWT6s7dnQyNQ9ifw&usqp=CAU'
    ]
  }
})

module.exports = Product
