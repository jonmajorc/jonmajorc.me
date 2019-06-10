import React from 'react'
import Box from './Box'
import cx from 'classnames'

function reducer(prevState, nextState) {
  return { ...prevState, ...nextState }
}

const Contact = props => {
  const [state, setState] = React.useReducer(reducer, {
    emailTemplate: '',
    emailTemplateDesc: '',
    name: '',
    email: '',
    company: '',
    subject: '',
    emailBody: '',
  })

  const emailTemplates = React.useMemo(
    () => [
      {
        emailTemplate: '',
        emailTemplateDesc: '',
        subject: '',
      },
      {
        emailTemplate: 'Request resume',
        emailTemplateDesc: `An automated email will be sent to ${state.email ||
          'your email address'} with my resume attached!`,
        subject: `Requesting resume, please!`,
      },
      {
        emailTemplate: 'Asking to pair',
        emailTemplateDesc: `Your message will be sent to ${state.email ||
          'your email address'}. Please understand if it takes awhile to respond.`,
        subject: `Hey, let's pair!`,
      },
    ],
    [state.email]
  )

  /***************************************************************************\
    handlers
  \***************************************************************************/

  const getEmailTemplate = value =>
    emailTemplates.find(template => template.emailTemplate === value)

  const handleFormData = e => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    })
  }

  const handleSelectData = e => {
    setState({
      ...state,
      ...getEmailTemplate(e.target.value),
    })
  }

  const handleEmailBlur = e => {
    setState({
      ...state,
      ...getEmailTemplate(state.emailTemplate),
    })
  }

  return (
    <Box
      header="Contact"
      subHeader="Say hi!"
      className={cx('Contact', props.className)}
    >
      <form action="" className="Contact__form">
        <label htmlFor="emailTemplate" className="Contact__form__label">
          Email Template
          <select
            name="emailTemplate"
            id="emailTemplate"
            value={state.emailTemplate}
            onChange={handleSelectData}
          >
            {emailTemplates.map(template => (
              <option
                key={template.emailTemplate}
                value={template.emailTemplate}
              >
                {template.emailTemplate}
              </option>
            ))}
          </select>
        </label>
        {state.emailTemplateDesc && <p>{state.emailTemplateDesc}</p>}
        <label htmlFor="name" className="Contact__form__label">
          Name
          <input
            type="text"
            id="name"
            onChange={handleFormData}
            value={state.name}
          />
        </label>
        <label htmlFor="email" className="Contact__form__label">
          Email
          <input
            type="text"
            id="email"
            onBlur={handleEmailBlur}
            onChange={handleFormData}
            value={state.email}
          />
        </label>
        <label htmlFor="company" className="Contact__form__label">
          Company
          <input
            type="text"
            id="company"
            onChange={handleFormData}
            value={state.company}
          />
        </label>
        <label htmlFor="subject" className="Contact__form__label">
          Subject
          <input
            type="text"
            id="subject"
            onChange={handleFormData}
            value={state.subject}
          />
        </label>
        <label htmlFor="emailBody" className="Contact__form__label">
          Email Body
          <textarea
            name="emailBody"
            id="emailBody"
            cols="30"
            rows="10"
            onChange={handleFormData}
            value={state.body}
            style={{ resize: 'none' }}
          />
        </label>
        <button />
      </form>
    </Box>
  )
}

export default Contact
