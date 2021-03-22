const express = require('express');
const app = express()
const port = process.env.port || 3000

app.use(express.json())

app.listen(port, (req, res) => {
  console.log(`Application is running at http://localhost:${port}`)
})
