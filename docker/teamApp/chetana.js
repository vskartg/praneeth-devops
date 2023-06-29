const express = require('express')
const app = express()
const port = 3000

app.get('/chetana', (req, res) => {
  res.send("Hello, This is chetana!")
})

app.listen(port, () => {
  console.log(`chetana app listening on port ${port}`)
})