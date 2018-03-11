'use strict'

// const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const store = require('./store')

// ajax requests to post the info input to the server (API). The API stores the
// sign up information and returns what's been saved.
const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    header: {
      contentType: 'application/json'
    },
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    header: {
      contentType: 'application/json'
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out',
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password',
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// Journal scripts
const createEntry = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/journals',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// Get all journal entries
const getAllEntries = function () {
  return $.ajax({
    url: config.apiOrigin + '/journals',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// // Get one journal entry
// const getOneEntry = function (data) {
//   // console.log(JSON.stringify(data))
//   return $.ajax({
//     url: config.apiOrigin + '/journals/' + data.id,
//     method: 'GET',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createEntry,
  getAllEntries,
  // getOneEntry
}
