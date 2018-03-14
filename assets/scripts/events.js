'use strict'

const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const store = require('./store')

// Buttons to show/hide when not logged in
const notSignedIn = () => {
  ui.signOutSuccess()
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
  // console.log(data)
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
  // console.log(data)
  $('#sign-in-form').get(0).reset()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// Sign out events
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    // .then(ui.signOutSuccess)
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
}

// Journal entry events
const onSubmitEntry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  $('#entry-modal').modal('hide')
  // The following get is to get the integer values assigned to radio buttons in order for API response to show it. Previously, showed "on" instead. Oddly, I can comment it out and it will continue to return the integer. I had to run it first and test then could remove it and it would still work. Weird (to me).
  // $('.rating').val()
  // console.log(data)
  api.createEntry(data)
    .then(ui.entrySubmitSuccess)
    .catch(ui.entrySubmitFailure)
  $('#journal-entry-form').get(0).reset()
}

// Get all journal entries
const onGetEntries = function (event) {
  event.preventDefault()
  $(this).prop('disabled', true)
  ui.clearEntries()
  api.getAllEntries()
    .then(ui.getEntriesSuccess)
    .catch(ui.getEntriesFailure)
}

// Get one journal entry
const onGetEntry = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data) // object with journal as key and value of object with ID requested.
  ui.clearEntries()
  api.getOneEntry(data)
    .then(ui.getEntrySuccess)
    .catch(ui.getEntryFailure)
  $('#get-entry-form').get(0).reset()
}

// To open update entry modal from DOM with ID in hidden input field
const onOpenUpdate = (event) => {
  event.preventDefault()
  // Store entry ID
  const id = event.target.dataset.id
  // console.log(id)
  // Use that ID for a GET request
  api.getOneEntryDOM(id)
    // store.journal is defined here
    .then(ui.getEntrySuccess)
    .then(onPopulateUpdate)
  $('#journal-update-form').get(0).reset()
}

// To populate the form with submitted responses once update form is viewable
const onPopulateUpdate = () => {
  const journal = store.journal
  console.log(journal.id)
  $('#id-update-input').val(journal.id)
  $('#state-update-input').val(journal.state)
  $('#loc-update-input').val(journal.location_name)
  $('#comments-update-input').val(journal.comments)
  $('#date-update-input').val(journal.date)
  $('#time-update-input').val(journal.time)
}

// Update entry
const onUpdateEntry = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $('.rating-update-input').val()
  console.log($('#rate-update-three').val())
  // Opens modal with entry form.
  $('#update-entry-modal').modal('hide')
  api.updateEntry(data)
    .then(() => api.getAllEntries(event))
    .then(ui.updateEntrySuccess)
}

// Delete an entry
const onDeleteEntry = (event) => {
  event.preventDefault()
  // grab the `data-id` attribute. data = the id from the handlebar button
  const id = event.target.dataset.id
  api.deleteEntry(id)
    .then(() => api.getAllEntries(event)) // after deleting an entry, refetch all entries
    .then(ui.deleteEntrySuccess)
    .catch(ui.deleteEntryFailure)
}

// Clear button
const onClearEntries = (event) => {
  event.preventDefault()
  $('#get-entries-button').prop('disabled', false)
  ui.clearEntries()
}

// Journal entry handlers
const entryHandlers = () => {
  $('#sign-in-button').click(onClearForms)
  $('#sign-up-button').click(onClearForms)
  $('#journal-entry-form').on('submit', onSubmitEntry)
  $('#get-entries-button').click(onGetEntries)
  $('#get-entry-form').on('submit', onGetEntry)
  // Must use .on for delegated events
  $('.get-entries').on('click', '.entry-update-button', onOpenUpdate)
  $('#journal-update-form').on('submit', onUpdateEntry)
  $('.get-entries').on('click', '.entry-delete-button', onDeleteEntry)
  $('#clear-entries-button').click(onClearEntries)
}

module.exports = {
  authHandlers,
  entryHandlers,
  notSignedIn
}
