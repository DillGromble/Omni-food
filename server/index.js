const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '..', 'src')))
app.use(express.static(path.join(__dirname, '..', 'assets')))

app.use('/api/email', (req, res, next) => {
  res.send(req.body)
})

app.use('*', (req, res) => { res.send('Looks like you\'re lost') })

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

app.listen(3000, () => console.log('Listening on port 3000...'))
