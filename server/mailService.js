const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'whitejosh42@gmail.com',
    pass: 'SOMEPASSWORD'
  }
})
