const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Helloz World')
})

app.listen(3000)