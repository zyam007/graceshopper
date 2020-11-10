const Sequelize = require('sequelize')
const db = require('./db/db')

// READ ME: defining category model

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageURL: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  categoryId: {
    type: Sequelize.STRING
  }
})

module.exports = Category
