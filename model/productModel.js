const Sequelize = require('sequelize')

const sequelize = require('../sequelize')

const product = {
  product_id: {
    type: Sequelize.STRING,
    unique: true
  },
  product_name: Sequelize.STRING,
  product_price: Sequelize.INTEGER
}

//定义产品Model
let Product = sequelize.define('product', product, { timestamps: false })

module.exports = Product