require('dotenv').config()
const nodemailer = require('nodemailer')
const ow = require('ow')

const emailIsValid = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

function validateAndReturnForm({ name, company, subject, emailBody, email }) {
  ow(name, 'Please enter name', ow.string.nonEmpty)
  ow(email, 'Email is invalid', ow.string.is(val => emailIsValid(val)))
  ow(company, 'Please input company', ow.string.nonEmpty)
  ow(subject, 'Subject too short', ow.string.minLength(5))
  ow(subject, 'Subject too long', ow.string.maxLength(120))
  ow(emailBody, 'Email body too short', ow.string.minLength(40))
  ow(emailBody, 'Email body too', ow.string.maxLength(1001))
}

async function main(event) {
  const formBody = JSON.parse(event.body)
  try {
    validateAndReturnForm(formBody)
  } catch (error) {
    return await {
      statusCode: 403,
      body: error.message.match(/`([a-zA-Z\s\d]+)`/)[1],
    }
  }
  const sender = `"${formBody.name}" <${formBody.email}>`

  try {
    let transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    let info = await transporter.sendMail({
      from: sender,
      to: '"Jon Major Condon" <hey@jonmajorc.me>',
      cc: sender,
      subject: formBody.subject,
      text: formBody.emailBody,
      // html: '<b>Hello world?</b>', // html body
    })

    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  } catch (error) {
    return await {
      statusCode: 500,
      body: 'Something went wrong.',
    }
  }

  return await {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  }
}

exports.handler = async function(event) {
  return main(event)
    .then(res => {
      return Promise.resolve(res)
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
