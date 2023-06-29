const express = require('express')
const app = express()
const port = 3000

app.get('/raja', (req, res) => {
  res.send(", Hello, This is raja!")
})

app.listen(port, () => {
  console.log(`port number ${port}`)
})
