'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

// Buttons to show/hide when not logged in
const notSignedIn = () => {
  ui.signOutSuccess()
  $('.get-entries').empty()
  $('#failure-message').hide()
  $('.failure-message').hide()
  $('#sign-in-button').show()
  $('#sign-up-button').show()
  $('#change-password-button').hide()
  $('#sign-out-button').hide()
  $('#journal-entry-button').hide()
  $('#get-entries-button').hide()
  $('#clear-entries-button').hide()
  $('#get-entry-form').hide()
  $('#small-blurb').hide()
  $('#big-blurb').show()
}

// Clear forms when partially completed
const onClearForms = () => {
  $('#sign-up-form').get(0).reset()
  $('#sign-in-form').get(0).reset()
}

// Sign up events
const onSignUp = function (event) {
  event.preventDefault()
  $('#sign-up-modal').modal('hide')
  const data = getFormFields(this)
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
  $('#sign-in-form').get(0).reset()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// Sign out events
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(notSignedIn)
    .then(ui.clearEntries)
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
  $('#sign-in-button').click(onClearForms)
  $('#sign-up-button').click(onClearForms)
}

module.exports = {
  authHandlers,
  notSignedIn
}
