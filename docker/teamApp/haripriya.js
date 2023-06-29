const express = require('express')
const app = express()
const port = 3000

app.get('/haripriya', (req, res) => {
  res.send("Hello, This is haripriya!")
})

app.listen(port, () => {
  console.log(`haripriya app listening on port ${port}`)
})