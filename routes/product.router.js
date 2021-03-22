const express = require('express');
const router = express.Router()

const {
  getProduct,
  getProductByID
} = require('../controller/product.controller')

router.get('/', getProduct)

router.get('/:id', getProductByID)

module.exports = router