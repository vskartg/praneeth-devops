const express = require('express')
const app = express()
const port = 3000

app.get('/sumanth', (req, res) => {
  res.send("Hello, This is sumanth!")
})

app.listen(port, () => {
  console.log(`sumanth app listening on port ${port}`)
})