require('dotenv').config()
const ow = require('ow')
const mailgun = require('mailgun-js')

const mg = mailgun({
  apiKey: process.env.MG_API_KEY,
  domain: process.env.MG_DOMAIN,
})

const emailIsValid = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

function validateAndReturnForm({ name, company, subject, emailBody, email }) {
  ow(name, 'Please enter name', ow.string.nonEmpty)
  ow(email, 'Email is invalid', ow.string.is(val => emailIsValid(val)))
  ow(company, 'Please enter company', ow.string.nonEmpty)
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
    const data = {
      from: sender,
      to: '"Jon Major Condon" <hey@jonmajorc.me>',
      cc: sender,
      subject: formBody.subject,
      text: formBody.emailBody,
      template: 'resume',
      'h:X-Mailgun-Variables': { test: 'test' },
    }

    const info = await mg.messages().send(data)
    console.log('Message sent:', JSON.stringify(info))
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
