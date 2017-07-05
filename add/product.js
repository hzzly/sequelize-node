const { products } = require('../data')
const Product = require('../model/productModel')

function add() {

  for (let i = 0; i < products.length; i++) {
    Product.create({
      id: i,
      product_id: i,
      product_name: products[i].name,
      product_price: products[i].price
    }).then(function (p) {
      console.log('created.' + JSON.stringify(p))
    }).catch(function (err) {
      console.log('failed: ' + err)
    })
  }
}

module.exports = add