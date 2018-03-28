'use strict'

const config = require('../config')
const store = require('../store')

// Journal scripts
const createEntry = (data) => {
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
const getAllEntries = () => {
  return $.ajax({
    url: config.apiOrigin + '/journals',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Get one journal entry
const getOneEntry = (data) => {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/journals/' + data.journal.id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Get one journal entry from DOM to be able to populate data into form for update
const getOneEntryDOM = (data) => {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/journals/' + data,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Update one journal entry
const updateEntry = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/journals/' + data.journal.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// Delete one journal entry
const deleteEntry = (id) => {
  // console.log(id)
  return $.ajax({
    url: config.apiOrigin + '/journals/' + id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createEntry,
  getAllEntries,
  getOneEntry,
  updateEntry,
  deleteEntry,
  getOneEntryDOM
}
