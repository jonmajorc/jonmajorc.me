import React from 'react'
import Box from './Box'
import cx from 'classnames'
import Button from './Button'
import { IDeviceContext } from './layout'

const initialState = {
  templateValue: '',
  templateOptionText: '',
  templateDesc: '',
  name: '',
  email: '',
  company: '',
  subject: '',
  emailBody: '',
  trySubmit: false,
}

/***************************************************************************\
  Reducers
\***************************************************************************/
function reducer(prevState, nextState) {
  return { ...prevState, ...nextState }
}

function fetchReducer(state, { type, response, error }) {
  switch (type) {
    case 'fetching': {
      return { fetching: true, response: null, error: null }
    }
    case 'fetched': {
      return { fetching: false, response, error: null }
    }
    case 'error': {
      return { fetching: false, response: null, error }
    }
    default:
      throw new Error(`Unsupported type: ${type}`)
  }
}

/***************************************************************************\
  Component
\***************************************************************************/
const Contact = props => {
  const isIDevice = React.useContext(IDeviceContext)
  const contactForm = React.useRef()
  const [state, setState] = React.useReducer(reducer, initialState)
  const [formFetchState, setFormFetchState] = React.useReducer(fetchReducer, {
    fetching: false,
    response: null,
    error: null,
  })

  const emailTemplates = React.useMemo(
    () => [
      {
        templateValue: 'resume',
        templateOptionText: 'Request resume',
        templateDesc: `I don't like using LinkedIn because of spam, so you can request my resume through here. An automated email will be sent to ${state.email ||
          'your email address'} with my resume attached!`,
        subject: `Requesting resume, please!`,
      },
      {
        templateValue: 'pair',
        templateOptionText: 'Asking to pair',
        templateDesc: `Your message will be sent to ${state.email ||
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
    emailTemplates.find(
      templateValue => templateValue.templateValue === value
    ) || state

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
      ...getEmailTemplate(state.templateValue),
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      setFormFetchState({ type: 'fetching' })

      const url = `${process.env.GATSBY_NETLIFY_FUNCTION_URL}/contact`
      const data = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      })

      const response = await data.json()

      switch (data.status) {
        case 403:
          return setFormFetchState({ type: 'error', error: response })
        default:
          return setFormFetchState({ type: 'fetched', response })
      }
    } catch (error) {
      console.log(error)
      setFormFetchState({ type: 'error', error })
    }
  }

  console.log(formFetchState)

  /***************************************************************************\
    Effects
  \***************************************************************************/
  React.useEffect(() => {
    let formList
    const addClassNames = tag => {
      tag.parentNode.classList.add('Contact--invalid__label')
      isIDevice && tag.parentNode.classList.add('isIDevice')
      tag.classList.add('Contact--invalid__input')
      isIDevice && tag.classList.add('isIDevice')
    }
    const removeClassNames = tag => {
      tag.parentNode.classList.remove('Contact--invalid__label')
      tag.parentNode.classList.remove('isIDevice')
      tag.classList.remove('Contact--invalid__input')
      tag.classList.remove('isIDevice')
    }

    if (contactForm.current) {
      formList = Array.from(contactForm.current)
      formList.map(tag => {
        if (!tag.id || tag.id === 'templateValue') return
        if (!formFetchState.error) return
        tag.value ? removeClassNames(tag) : addClassNames(tag)
      })
    }
    return () => {
      if (contactForm.current) {
        formList.map(tag => {
          removeClassNames(tag)
        })
      }
    }
  })

  /***************************************************************************\
  renderer(s)    
  \***************************************************************************/
  if (formFetchState.response) {
    return (
      <Box header="Contact" subHeader="Thank you for your message!">
        <p>Thank you, and I will respond soon...</p>
        <span>But for now, go follow me on social media!</span>
      </Box>
    )
  }

  return (
    <Box
      header="Contact"
      subHeader="Say hi!"
      className={cx('Contact', props.className)}
    >
      <form
        className="Contact__form"
        name="contact"
        data-netlify="true"
        ref={contactForm}
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="templateValue" className="Contact__form__label">
          Email Template
          <select
            name="templateValue"
            id="templateValue"
            value={state.templateValue}
            onChange={handleSelectData}
          >
            {emailTemplates.reduce(
              (acc, templateValue) => [
                ...acc,
                <option
                  key={templateValue.templateValue}
                  value={templateValue.templateValue}
                >
                  {templateValue.templateOptionText}
                </option>,
              ],
              <option key="empty" />
            )}
          </select>
        </label>
        {state.templateDesc && <p>{state.templateDesc}</p>}
        <label htmlFor="name" className="Contact__form__label">
          Name
          <input
            type="text"
            id="name"
            pattern="[a-zA-Z\s]+"
            onChange={handleFormData}
            value={state.name}
          />
        </label>
        <label htmlFor="email" className="Contact__form__label">
          Email
          <input
            type="email"
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
            minLength="1"
            onChange={handleFormData}
            value={state.company}
          />
        </label>
        <label htmlFor="subject" className="Contact__form__label">
          Subject
          <input
            type="text"
            id="subject"
            minLength="5"
            maxLength="40"
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
            minLength="40"
            maxLength="500"
            onChange={handleFormData}
            value={state.body}
          />
        </label>
        <Button color="red" type="submit">
          Send Message
        </Button>
      </form>
    </Box>
  )
}

export default Contact
