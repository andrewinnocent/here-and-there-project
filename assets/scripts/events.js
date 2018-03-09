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

// Authorization handlers
const authHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-out-button').click(onSignOut)
  $('#change-password-form').on('submit', onChangePassword)
}

// Journal entry events
const onSubmitEntry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // The following get is to get the integer values assigned to radio buttons in order for API response to show it. Previously, showed "on" instead. Oddly, I can comment it out and it will continue to return the integer. I had to run it first and test then could remove it and it would still work. Weird (to me).
  // $('.rating').val()
  console.log(data)
  api.createEntry(data)
    .then(ui.entrySubmitSuccess)
    .catch(ui.entrySubmitFailure)
}

// Journal entry handlers
const entryHandlers = () => {
  $('#journal-entry-form').on('submit', onSubmitEntry)
}

module.exports = {
  authHandlers,
  entryHandlers
}
