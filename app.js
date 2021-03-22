const express = require('express');
const mysql = require('mysql');
const app = express()
const port = process.env.port || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: "Router run"
  })
})

app.listen(port, (req, res) => {
  console.log(`Application is running at http://localhost:${port}`)
})
