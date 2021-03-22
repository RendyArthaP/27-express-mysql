const express = require('express');
const router = express.Router()

const {
  getUsers,
  getUsersByID
} = require('../controller/user.controller')

router.get('/', getUsers)

router.get('/:id', getUsersByID)

module.exports = router