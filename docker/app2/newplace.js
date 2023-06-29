const express = require('express')
const app = express()
const port = 3000

app.get('/tejaswini', (req, res) => {
  res.send(", Hello, This is tejaswini!")
})

app.listen(port, () => {
  console.log(`port number ${port}`)
})
