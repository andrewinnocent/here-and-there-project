'use strict'

const store = require('../store')
const indexJournalsTemplate = require('../templates/helpers/journals-listing.handlebars')
const indexJournalTemplate = require('../templates/helpers/journal-listing.handlebars')

// Journal entry messages
const entrySubmitSuccess = () => $('#success-message').text('✈ Smooth Sailing!').fadeIn().fadeOut(3000)

const entrySubmitFailure = () => $('#failure-message').text('Whoops! Try Again').fadeIn().fadeOut(3000)

// Get all journal entries messages
const getEntriesSuccess = (data) => {
  const indexJournalsHtml = indexJournalsTemplate({journals: data.journals})
  $('.get-entries').append(indexJournalsHtml)
  store.journals = data.journals
}

const getEntriesFailure = () => $('#failure-message').text('Go Ahead And Try Again')

// Get one journal entry messages
const getEntrySuccess = (data) => {
// data.journal is an object with journal as key and object with ID requested as value.
  const indexJournalHtml = indexJournalTemplate({journal: data.journal})
  $('.get-entries').append(indexJournalHtml)
  store.journal = data.journal
}

const getEntryFailure = (data) => {
  $('.failure-message').text('Entry Doesn\'t Exist - Try Again').fadeIn().fadeOut(3000)
}

// Update one journal entry messages
const updateEntrySuccess = (data) => {
// Clear DOM of entries
  $('.get-entries').empty()
  $('#success-message').text('Done!').fadeIn().fadeOut(3000)
  // Reload DOM of remaining entries
  const indexJournalHtml = indexJournalTemplate({journal: data.journal})
  $('.get-entries').append(indexJournalHtml)
  store.journals = data.journals
}

// Delete one journal entry messages
const deleteEntrySuccess = (data) => {
// Clear DOM of entries
  $('.get-entries').empty()
  $('#success-message').text('😭 It\'s Gone Forever!').fadeIn().fadeOut(3000)
  // Reload DOM of remaining entries
  const indexJournalsHtml = indexJournalsTemplate({journals: data.journals})
  $('.get-entries').prepend(indexJournalsHtml)
  store.journals = data.journals
}

const deleteEntryFailure = () => $('#failure-message').text('It Won\'t Go Away - Try Again')

// To clear entries in DOM
const clearEntries = () => $('.get-entries').empty()

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
