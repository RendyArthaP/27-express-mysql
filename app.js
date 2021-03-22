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

app.get('/', (req, res) => {
  res.json({
    message: "Success"
  })
})

app.listen(port, (req, res) => {
  console.log(`Application is running at http://localhost:${port}`)
})
