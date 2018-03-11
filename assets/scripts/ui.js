'use strict'

const store = require('./store')

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

// forEach() method to iterate through each object in the array
  data.journals.forEach(function (index) {
    console.log('Date: ' + index.date +
    ' State: ' + index.state +
    ' Location: ' + index.location_name +
    ' Rating: ' + index.rating +
    ' Comments: ' + index.comments +
    ' Time: ' + index.time)
  }) // The challenge is to show the results in the DOM!

  // const test = JSON.stringify(data.journals[0])
  // $('#get-entries-message').text(test)

  // A VERY UGLY way to get values to show (this is one object).
  $('#get-entries-date').text('When: ' + JSON.stringify(data.journals[0].date))
  $('#get-entries-state').text(JSON.stringify(data.journals[0].state))
  $('#get-entries-location').text(JSON.stringify(data.journals[0].location_name))
  $('#get-entries-rating').text(JSON.stringify(data.journals[0].rating))
  $('#get-entries-comments').text(JSON.stringify(data.journals[0].comments))
  $('#get-entries-time').text(JSON.stringify(data.journals[0].time))

  $('.get-entries').css('background-color', '#8fff90')
  store.journals = data.journals
}

const getEntriesFailure = function () {
  $('#get-entries-message').text('Error Getting Entries - Try Again')
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
  getEntriesFailure
}
