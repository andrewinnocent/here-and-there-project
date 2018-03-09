'use strict'

const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')

// Sign up events
const onSignUp = function (event) {
  event.preventDefault()
  $('#sign-up-modal').modal('hide')
  const data = getFormFields(this)
  console.log(data)
  $('#sign-up-form').get(0).reset()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// Sign in events
const onSignIn = function (event) {
  event.preventDefault()
  $('#sign-in-modal').modal('hide')
  const data = getFormFields(this)
  console.log(data)
  $('#sign-in-form').get(0).reset()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// Sign out events
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// Change password events
const onChangePassword = function (event) {
  event.preventDefault()
  $('#change-password-modal').modal('hide')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#change-password-form').get(0).reset()
}

const authHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-out-button').click(onSignOut)
  $('#change-password-form').on('submit', onChangePassword)
}

module.exports = {
  authHandlers
}
