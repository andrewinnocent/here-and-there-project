'use strict'

const store = require('./store')
const indexJournalsTemplate = require('./templates/helpers/journals-listing.handlebars')
const indexJournalTemplate = require('./templates/helpers/journal-listing.handlebars')

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
  $('#success-message').text('✌ See you later!').fadeIn().fadeOut(3000)
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

// Journal entry messages
const entrySubmitSuccess = function () {
  $('#success-message').text('✈ Smooth Sailing!').fadeIn().fadeOut(3000)
}

const entrySubmitFailure = function () {
  $('#failure-message').text('Whoops! Try Again').fadeIn().fadeOut(3000)
}

// Get all journal entries messages
const getEntriesSuccess = function (data) {
// data.journals is an array of objects
  console.log(data.journals)
  // Referencing handlebars
  const indexJournalsHtml = indexJournalsTemplate({journals: data.journals})
  $('.get-entries').append(indexJournalsHtml)
  store.journals = data.journals
}

const getEntriesFailure = function () {
  $('#get-entries-message').text('Go Ahead And Try Again')
  $('#get-entries-message').css('background-color', '#ff91A3')
}

// Get one journal entry messages
const getEntrySuccess = function (data) {
// data.journal is an object with journal as key and object with ID requested as value.
  console.log(data.journal)
  const indexJournalHtml = indexJournalTemplate({journal: data.journal})
  $('.get-entries').append(indexJournalHtml)
  store.journal = data.journal
}

const getEntryFailure = function () {
  $('#get-entries-message').text('Ah! Entry Doesn\'t Exist - Try Again')
  $('#get-entries-message').css('background-color', '#ff91A3')
}

// Update one journal entry messages
const updateEntrySuccess = function (data) {
// Clear DOM of entries
  $('.get-entries').empty()
  // Reload DOM of remaining entries
  const indexJournalsHtml = indexJournalsTemplate({journals: data.journals})
  $('.get-entries').append(indexJournalsHtml)
  $('.get-entries').css('background-color', '#8fff90')
  console.log(data.journals)
  store.journals = data.journals
}

// Delete one journal entry messages
const deleteEntrySuccess = function (data) {
// Clear DOM of entries
  $('.get-entries').empty()
  // Reload DOM of remaining entries
  const indexJournalsHtml = indexJournalsTemplate({journals: data.journals})
  $('.get-entries').append(indexJournalsHtml)
  $('.get-entries').css('background-color', '#8fff90')
  store.journals = data.journals
}

const deleteEntryFailure = () => {
  $('#get-entries-message').text('It Won\'t Go Away - Try Again')
  $('#get-entries-message').css('background-color', '#ff91A3')
}

// To clear entries in DOM
const clearEntries = () => {
  $('.get-entries').empty()
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
  getEntryFailure,
  updateEntrySuccess,
  deleteEntrySuccess,
  deleteEntryFailure,
  clearEntries
}
