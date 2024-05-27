const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World 123!')
})

app.get('/ajay', (req, res) => {
    res.send('Hello ajay')
  })

app.get('/satya', (req, res) => {
    res.send('Hello welocome to devops world, satya is enjoying the course')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})