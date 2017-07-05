const Sequelize = require('sequelize')

const sequelize = require('../sequelize')

const trade = {
  trade_id: {
    type: Sequelize.STRING,
    unique: true
  },
  user_id: Sequelize.STRING,
  date: Sequelize.DATE,
  province: Sequelize.STRING,
  insurance_name: Sequelize.STRING,
  insurance_price: Sequelize.INTEGER
}

//定义交易Model
let Insurance = sequelize.define('trade', trade, { timestamps: false })

module.exports = Insurance
