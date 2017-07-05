const Sequelize = require('sequelize')

const sequelize = require('../sequelize')

const behavior = {
  user_id: Sequelize.STRING,
  longitude: Sequelize.STRING,  //经度
  latitude: Sequelize.STRING,   //纬度
}

//定义用户行为Model
let Behavior = sequelize.define('behavior', behavior, { timestamps: false })

module.exports = Behavior