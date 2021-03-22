const express = require('express');
const connection = require('./config/db');
const app = express()
const port = process.env.port || 3000
const routes = require('./routes')

app.use(express.json())

app.use(routes)

connection.connect((err) => {
  if(err) {
    console.log(err.sqlMessage)
  } else {
    console.log('Connection database success')
  }
})

app.listen(port, (req, res) => {
  console.log(`Application is running at http://localhost:${port}`)
})
