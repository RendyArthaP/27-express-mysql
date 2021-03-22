const express = require('express');
const router = express.Router()

const {
  getOrder,
  getOrderByID
} = require('../controller/order.controller');

router.get('/', getOrder)

router.get('/:id', getOrderByID)

module.exports = router