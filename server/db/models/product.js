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
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.INTEGER
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
      'https://i.etsystatic.com/23115639/r/il/cbdaf8/2360940716/il_1588xN.2360940716_r2g5.jpg',
      'https://i.etsystatic.com/23115639/r/il/ae27d0/2408543707/il_1588xN.2408543707_kvbx.jpg',
      'https://i.etsystatic.com/23115639/r/il/1b0e13/2408543645/il_1588xN.2408543645_6hnr.jpg'
    ]
  }
})

module.exports = Product
