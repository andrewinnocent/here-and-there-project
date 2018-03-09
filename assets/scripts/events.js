'use strict'

// const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
// const ui = require('./ui')

// Sign up event
const onSignUp = function (event) {
  event.preventDefault()
  $('#sign-up-modal').modal('hide')
  const data = getFormFields(this)
  console.log(data)
  $('#sign-up-form').get(0).reset()
}

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
