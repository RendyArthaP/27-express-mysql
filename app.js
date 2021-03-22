const express = require('express');
const mysql = require('mysql2');
const app = express()
const port = process.env.port || 3000

app.use(express.json())

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "onlineshop"
})

connection.connect((err) => {
  if(err) {
    console.log(err.sqlMessage)
  } else {
    console.log('Connection database success')
  }
})

const queryUser = `SELECT * FROM user`

const queryProduct = `SELECT * FROM product`

const queryOrder = `
  SELECT orders.id, user.user, product.namaProduk as product, product.harga, orders.totalHarga 
  FROM orders 
  JOIN user on orders.userID = user.id
  JOIN product on orders.productID = product.id
`

app.get('/', (req, res) => {
  res.json({
    message: "Success"
  })
})

// GET USER
app.get('/user', (req, res) => {
  connection.query(queryUser, (err, data) => {
    if(err) {
      console.log(err)
    } else {
      res.json(data)
    }
  })
})

// GET USER BY ID
app.get('/user/:id', (req, res) => {
  const id = req.params.id
  connection.query(
    `${queryUser} WHERE user.id = ${id}`,
    (err, data) => {
      if(err) {
        console.log(err)
      } else {
        res.json(data)
      }
    }
  )
})

// GET PRODUCT
app.get('/product', (req, res) => {
  connection.query(queryProduct, (err, data) => {
    if(err) {
      console.log(err)
    } else {
      res.json(data)
    }
  })
})

// GET PRODUCT BY ID
app.get('/product/:id', (req, res) => {
  const id = req.params.id
  connection.query(
    `${queryProduct} WHERE product.id = ${id}`,
    (err, data) => {
      if(err) {
        console.log(err)
      } else {
        res.json(data)
      }
    }
  )
})

// GET ORDERS
app.get('/orders', (req, res) => {
  connection.query(queryOrder, (err, data) => {
    if(err) {
      console.log(err)
    } else {
      res.json(data)
    }
  })
})

// GET ORDERS BY ID
app.get('/orders/:id', (req, res) => {
  const id = req.params.id
  connection.query(
    `${queryOrder} WHERE orders.id = ${id}`,
    (err, data) => {
      if(err) {
        console.log(err)
      } else {
        res.json(data)
      }
    }
  )
})

app.listen(port, (req, res) => {
  console.log(`Application is running at http://localhost:${port}`)
})
