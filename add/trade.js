const { insuranceTypes, provinces } = require('../data')
const Insurance = require('../model/tradeModel')

function add() {
  for (let i = 1; i <= 10000; i++) {
    let insurance_type = insuranceTypes[Math.floor(Math.random() * 4)]
    Insurance.create({
      id: i,
      trade_id: i + '',
      user_id: '1000' + i,
      date: new Date(),
      province: provinces[Math.floor(Math.random() * 7)],
      insurance_name: insurance_type.name,
      insurance_price: insurance_type.price
    }).then(function (p) {
      console.log('created.' + JSON.stringify(p))
    }).catch(function (err) {
      console.log('failed: ' + err)
    })
  }
}

module.exports = add