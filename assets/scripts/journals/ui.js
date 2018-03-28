'use strict'

const store = require('../store')
const indexJournalsTemplate = require('../templates/helpers/journals-listing.handlebars')
const indexJournalTemplate = require('../templates/helpers/journal-listing.handlebars')

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
  // console.log(data.journals)
  // Referencing handlebars
  const indexJournalsHtml = indexJournalsTemplate({journals: data.journals})
  $('.get-entries').append(indexJournalsHtml)
  store.journals = data.journals
}

const getEntriesFailure = function () {
  $('#failure-message').text('Go Ahead And Try Again')
}

// Get one journal entry messages
const getEntrySuccess = function (data) {
// data.journal is an object with journal as key and object with ID requested as value.
  // console.log(data.journal)
  const indexJournalHtml = indexJournalTemplate({journal: data.journal})
  $('.get-entries').append(indexJournalHtml)
  store.journal = data.journal
}

const getEntryFailure = function (data) {
  // $('.failure-message').show()
  $('.failure-message').text('Entry Doesn\'t Exist - Try Again').fadeIn().fadeOut(3000)
}

// Update one journal entry messages
const updateEntrySuccess = function (data) {
// Clear DOM of entries
  $('.get-entries').empty()
  $('#success-message').text('Done!').fadeIn().fadeOut(3000)
  // Reload DOM of remaining entries
  const indexJournalHtml = indexJournalTemplate({journal: data.journal})
  $('.get-entries').append(indexJournalHtml)
  // const indexJournalsHtml = indexJournalsTemplate({journals: data.journals})
  // $('.get-entries').append(indexJournalsHtml)
  // console.log(data.journals)
  store.journals = data.journals
}

// Delete one journal entry messages
const deleteEntrySuccess = function (data) {
// Clear DOM of entries
  $('.get-entries').empty()
  $('#success-message').text('😭 It\'s Gone Forever!').fadeIn().fadeOut(3000)
  // Reload DOM of remaining entries
  const indexJournalsHtml = indexJournalsTemplate({journals: data.journals})
  $('.get-entries').prepend(indexJournalsHtml)
  store.journals = data.journals
}

const deleteEntryFailure = () => {
  $('#failure-message').text('It Won\'t Go Away - Try Again')
}

// To clear entries in DOM
const clearEntries = () => {
  $('.get-entries').empty()
}

module.exports = {
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
