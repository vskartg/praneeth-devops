const express = require('express')
const app = express()
const port = 3000

app.get('/karthik', (req, res) => {
  res.send("Hello, This is karthik!")
})

app.listen(port, () => {
  console.log(`karthik app listening on port ${port}`)
})