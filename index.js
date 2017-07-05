const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
app.use(bodyParser.json())
app.use(cors())

//测试连接
// const sequelize = require('./sequelize')

//添加交易信息，
// const tradeAdd = require('./add/trade')
// tradeAdd()

//添加用户信息
// const userAdd = require('./add/user')
// userAdd()

//添加产品信息
const productAdd = require('./add/product')
productAdd()


app.listen(3000);
console.log('server is listen http://localhost:3000')