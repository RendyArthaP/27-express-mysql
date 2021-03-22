const express = require('express');
const router = express.Router()
const userRouter = require('./user.router');
const productRouter = require('./product.router');
const orderRouter = require('./order.router');

router.get('/', (req, res) => {
  res.json({
    message: 'Success'
  })
})

router.use('/user', userRouter)

router.use('/product', productRouter)

router.use('/order', orderRouter)

module.exports = router