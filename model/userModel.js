const Sequelize = require('sequelize')

const sequelize = require('../sequelize')

const user = {
  user_id: {
    type: Sequelize.STRING,
    unique: true
  },
  name: Sequelize.STRING,
  phone: Sequelize.STRING,
  sex: Sequelize.STRING,
  age: Sequelize.INTEGER
}

//定义用户Model
let User = sequelize.define('user', user, { timestamps: false })

module.exports = User