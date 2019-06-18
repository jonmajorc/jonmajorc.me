require('dotenv').config()
const ow = require('ow')
const mailgun = require('mailgun-js')
const AWS = require('aws-sdk')
const { distanceInWords } = require('date-fns')

const s3 = new AWS.S3()

const S3_EXPIRE = Number(process.env.S3_FILE_EXPIRE) || 600
const mg = mailgun({
  apiKey: process.env.MG_API_KEY,
  domain: process.env.MG_DOMAIN,
})

const emailIsValid = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

function validateAndReturnForm({ name, company, subject, emailBody, email }) {
  ow(name, 'Please enter name', ow.string.nonEmpty)
  ow(email, 'Email is invalid', ow.string.is(val => emailIsValid(val)))
  ow(company, 'Please enter company', ow.string.nonEmpty)
  ow(company, 'Company too long', ow.string.maxLength(50))
  ow(subject, 'Subject too short', ow.string.minLength(5))
  ow(subject, 'Subject too long', ow.string.maxLength(120))
  ow(emailBody, 'Email body too short', ow.string.minLength(40))
  ow(emailBody, 'Email body too', ow.string.maxLength(500))
}

const convertToMinutes = s =>
  distanceInWords(0, s * 1000, { includeSeconds: true })

async function getSignedUrl() {
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: process.env.S3_BUCKET_FILE,
    Expires: S3_EXPIRE,
  }
  return await s3.getSignedUrl('getObject', params)
}

async function composeMessage(formBody, data) {
  switch (formBody.templateValue) {
    case 'resume':
      const url = await getSignedUrl()
      return {
        ...data,
        template: formBody.templateValue,
        'h:X-Mailgun-Variables': JSON.stringify({
          ...data['h:X-Mailgun-Variables'],
          expire: `${convertToMinutes(S3_EXPIRE)}`,
          resume_link: url,
          ...formBody,
        }),
      }
    default:
      return data
  }
}

async function main(event) {
  const formBody = JSON.parse(event.body)

  try {
    validateAndReturnForm(formBody)
  } catch (error) {
    return await {
      statusCode: 403,
      body: JSON.stringify({
        message: error.message.match(/`([a-zA-Z\s\d]+)`/)[1],
      }),
    }
  }

  const sender = `"${formBody.name}" <${formBody.email}>`
  try {
    const data = await composeMessage(formBody, {
      from: sender,
      to: '"Jon Major Condon" <hey@jonmajorc.me>',
      cc: sender,
      subject: formBody.subject,
      text: formBody.emailBody,
      'h:X-Mailgun-Variables': {
        sender,
      },
    })
    const info = await mg.messages().send(data)
    console.log('Message sent:', JSON.stringify(info))
  } catch (error) {
    return await {
      statusCode: 500,
      body: JSON.stringify({ message: 'Something went wrong.' }),
    }
  }

  return await {
    statusCode: 200,
    body: JSON.stringify({ message: 'success!' }),
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
