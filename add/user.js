const { phoneNo, familyNames, givenNames } = require('../data')
const User = require('../model/userModel')

function getMoble() {
  let i = parseInt(10 * Math.random());
  let phone = phoneNo[i];
  for (let j = 0; j < 8; j++) {
    phone = phone + Math.floor(Math.random() * 10);
  }
  return phone
}

function getName() {
  let i = parseInt( 100 * Math.random())
  let familyName = familyNames[i]
  let j = parseInt( 101 * Math.random())
  let givenName = givenNames[j]
  return familyName + givenName
}

function getAge() {
  return parseInt( 70 * Math.random() + 10)
}

function getSex() {
  return Math.round(Math.random())  //0,1
}

function add() {

  for (let i = 1; i <= 10000; i++) {
    User.create({
      id: i,
      user_id: '1000' + i,
      name: getName(),
      phone: getMoble(),
      sex: getSex(),
      age: getAge()
    }).then(function (p) {
        console.log('created.' + JSON.stringify(p))
      }).catch(function (err) {
        console.log('failed: ' + err)
      })
  }
}

module.exports = add