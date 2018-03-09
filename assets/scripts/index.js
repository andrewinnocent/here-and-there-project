// 'use strict'
//
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')
// const api = require('./api')
// const ui = require('./ui')

$(() => {
  setAPIOrigin(location, config)
})

// // use require with a reference to bundle the file and use it in this file
// // const example = require('./example')
//
// // use require without a reference to ensure a file is bundled
// // require('./example')

$(() => {
  events.addHandlers()
})
// module.exports = {
//   onSignUp
// }
