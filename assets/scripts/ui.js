'use strict'

const store = require('./store')
const indexJournalsTemplate = require('./templates/helpers/journals-listing.handlebars')
const indexJournalTemplate = require('./templates/helpers/journal-listing.handlebars')

// Sign-up messages
const signUpSuccess = function (data) {
  $('#message').text('Signed Up Successfully')
  $('#message').css('background-color', '#8fff90')
}

const signUpFailure = function () {
  $('#message').text('Error on Signing Up - Try Again')
  $('#message').css('background-color', '#ff91A3')
}

// Sign-in messages
const signInSuccess = function (data) {
  $('#message').text('Log In Successful, User ' + data.user.id)
  $('#message').css('background-color', '#8fff90')
  store.user = data.user
  // $('#log-in').hide()
  // $('#signUp').hide()
  // $('#subtitle').hide()
  // $('.reset').show()
  // $('#password-button').show()
  // $('#onSignOut').show()
  // $('#get-games-button').show()
}

const signInFailure = function () {
  $('#message').text('Error with Log In - Try Again')
  $('#message').css('background-color', '#ff91A3')
}

// Sign-out messages
const signOutSuccess = function () {
  $('#message').text('Signed Out Successfully')
  $('#message').css('background-color', '#8fff90')
  // $('#log-in').show()
  // $('#signUp').show()
  // $('#game-message').hide()
  // $('#game-id').hide()
}

const signOutFailure = function () {
  $('#message').text('Error Signing Out - Try Again')
  $('#message').css('background-color', '#ff91A3')
}

// Change password messages
const changePasswordSuccess = function () {
  $('#message').text('Changed Password Successfully')
  $('#message').css('background-color', '#8fff90')
}

const changePasswordFailure = function () {
  $('#message').text('Error Changing Password - Try Again')
  $('#message').css('background-color', '#ff91A3')
}

// Journal entry messages
const entrySubmitSuccess = function () {
  $('#message').text('Submitted Successfully')
  $('#message').css('background-color', '#8fff90')
}

const entrySubmitFailure = function () {
  $('#message').text('Error Submiting - Try Again')
  $('#message').css('background-color', '#ff91A3')
}

// Get all journal entries messages
const getEntriesSuccess = function (data) {
// data.journals is an array of objects
  console.log(data.journals)
  // Referencing handlebars
  const indexJournalsHtml = indexJournalsTemplate({journals: data.journals})
  $('.get-entries').append(indexJournalsHtml)
  $('.get-entries').css('background-color', '#8fff90')
  store.journals = data.journals
}

const getEntriesFailure = function () {
  $('#get-entries-message').text('Error Getting Entries - Try Again')
  $('#get-entries-message').css('background-color', '#ff91A3')
}

// Get one journal entry messages
const getEntrySuccess = function (data) {
// data.journal is an object with journal as key and object with ID requested as value.
  console.log(data.journal)
  const indexJournalHtml = indexJournalTemplate({journal: data.journal})
  $('.get-entries').append(indexJournalHtml)
  $('.get-entries').css('background-color', '#8fff90')
  store.journal = data.journal
}

const getEntryFailure = function () {
  $('#get-entries-message').text('Error Getting Entry - Try Again')
  $('#get-entries-message').css('background-color', '#ff91A3')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  entrySubmitSuccess,
  entrySubmitFailure,
  getEntriesSuccess,
  getEntriesFailure,
  getEntrySuccess,
  getEntryFailure
}
