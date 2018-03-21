'use strict'

const store = require('../store')
// const indexJournalsTemplate = require('../templates/helpers/journals-listing.handlebars')
// const indexJournalTemplate = require('../templates/helpers/journal-listing.handlebars')

// Sign-up messages
const signUpSuccess = function (data) {
  $('#success-message').text('Success! Log In to Start Journaling!').fadeIn().fadeOut(3000)
}

const signUpFailure = function () {
  $('#failure-message').text('Weird... Try Again').fadeIn().fadeOut(3000)
}

// Sign-in messages
const signInSuccess = function (data) {
  $('#success-message').text('👋 Welcome, User ' + data.user.email + '!').fadeIn().fadeOut(3000)
  // Buttons to show when signed in
  $('#sign-in-button').hide()
  $('#sign-up-button').hide()
  $('#change-password-button').show()
  $('#sign-out-button').show()
  $('#journal-entry-button').show()
  $('#get-entries-button').show()
  $('#clear-entries-button').show()
  $('#get-entry-form').show()
  $('#small-blurb').show()
  $('#big-blurb').hide()
  store.user = data.user
}

const signInFailure = function () {
  $('#failure-message').text('Hmmm... Try That Again').toggle().fadeOut(3000)
}

// Sign-out messages
const signOutSuccess = function () {
  $('#success-message').text('✌ See you later!').toggle().fadeOut(3000)
}

const signOutFailure = function () {
  $('#failure-message').text('Uh oh... Are You Signed In?').fadeIn().fadeOut(3000)
}

// Change password messages
const changePasswordSuccess = function () {
  $('#success-message').text('Well done!').fadeIn().fadeOut(3000)
}

const changePasswordFailure = function () {
  $('#failure-message').text('Welp... Try Again').fadeIn().fadeOut(3000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
