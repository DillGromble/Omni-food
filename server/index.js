const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '..', 'src')))
app.use(express.static(path.join(__dirname, '..', 'assets')))

app.use('*', (req, res) => { res.sendFile(__dirname, '..', 'src/index.html') })

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

app.listen(3000, () => console.log('Listening on port 3000...'))
