const express = require('express')
const app = express()
const port = 3000

app.get('/index', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
})
app.get('/shop', (req, res) => {
    res.sendFile('shop.html', {root: __dirname});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})