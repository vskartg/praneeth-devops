const express = require('express')
const app = express()
const port = 3000

app.get('/maazin', (req, res) => {
  res.send("Hello, This is maazin!")
})

app.listen(port, () => {
  console.log(`maazin app listening on port ${port}`)
})