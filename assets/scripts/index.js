// 'use strict'
//
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const api = require('./api')
// const ui = require('./ui')
// const getFormFields = require('../../lib/get-form-fields')

$(() => {
  setAPIOrigin(location, config)
})

// // use require with a reference to bundle the file and use it in this file
// // const example = require('./example')
//
// // use require without a reference to ensure a file is bundled
// // require('./example')

$(() => {
  $('#onSignUp').on('submit', function (event) {
    console.log(event)
    event.preventDefault()
    console.log('I clicked button')
  })
})
// module.exports = {
//   onSignUp
// }
