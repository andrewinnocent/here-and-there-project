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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
