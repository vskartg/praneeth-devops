const express = require('express')
const app = express()
const port = 3000

app.get('/supriya', (req, res) => {
  res.send("Hello, This is supriya!")
})

app.listen(port, () => {
  console.log(`supriya app listening on port ${port}`)
})