const express = require('express')
const app = express()
const port = 3000

app.get('/harshitha', (req, res) => {
  res.send(", Hello, This is harshitha!")
})

app.listen(port, () => {
  console.log(`port number ${port}`)
})
