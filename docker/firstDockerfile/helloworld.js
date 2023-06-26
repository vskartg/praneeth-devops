const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("This is praneeth's Hello World!")
})

app.listen(port, () => {
  console.log(`praneeth app listening on port ${port}`)
})