const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://i.pinimg.com/originals/3d/e4/83/3de48376da0508994b5d9c0f9ee6c020.jpg'
  }
})

module.exports = Category
