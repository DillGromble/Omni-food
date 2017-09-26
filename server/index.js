const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')
const transporter = require('./mailService')


app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '..', 'src')))
app.use(express.static(path.join(__dirname, '..', 'assets')))

app.use('/api/email', (req, res, next) => {
  const mailOptions = {
    from: req.body.from,
    to: 'whitejosh42@gmail.com',
    subject: 'tasty testing',
    text: req.body.message
  }
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.error(err)
    else console.log('Message sent: ' + info.response)
  })
})

app.use('*', (req, res) => { res.send('Looks like you\'re lost') })

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

app.listen(3000, () => console.log('Listening on port 3000...'))
