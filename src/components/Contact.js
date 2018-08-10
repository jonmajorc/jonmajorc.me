import React from 'react'
import cx from 'classnames'
import MediaQuery from 'react-responsive'
// import Component from './Component'

// components
import Section from './Section'

class Contact extends React.Component {
  state = {
    name: '',
    subject: '',
    message: '',
    attempt: 0,
  }

  constructor() {
    super()
    this.nameInputRef = React.createRef()
  }

  componentDidMount() {
    console.log('mount')
    this.focusNameInput(location.hash === '#contact')
    window.addEventListener('hashchange', () => {
      this.focusNameInput(location.hash === '#contact')
    })
  }

  submit = e => {
    e.preventDefault()
    if (e.target.checkValidity()) {
      this.setState({ attempt: 0 })
      alert(JSON.stringify(this.state, null, 2))
    } else {
      this.setState(prevState => ({
        attempt: prevState.attempt + 1,
      }))
    }
  }

  focusNameInput = isContactHash => {
    if (isContactHash) {
      this.nameInputRef.current.focus()
    }
  }

  handleFormInputs = ({ target }) => {
    this.setState(
      {
        [target.name]: target.value,
      },
      () => target.classList.toggle('invalid', !this.state[target.name])
    )
  }

  render() {
    console.log(this.state)
    return (
      <Section
        className="contact"
        id="contact"
        section="contact"
        opening="{"
        closing="}"
        btnToRender={
          <button type="submit" className="section__btn" form="contactForm">
            .submit()
          </button>
        }
      >
        <div className="content">
          <form
            id="contactForm"
            className="form"
            onSubmit={this.submit}
            noValidate
          >
            <div className="form__group">
              <label htmlFor="name">Name:</label>
              <div className="input__group">
                <span className="input-quote">{'"'}</span>
                <input
                  name="name"
                  type="text"
                  onChange={this.handleFormInputs}
                  ref={this.nameInputRef}
                  value={this.state.name}
                  pattern="\w+"
                  className={cx({
                    invalid: !this.state.name && this.state.attempt > 0,
                  })}
                  required
                />
                <span className="input-quote">{'"'}</span>
              </div>
            </div>
            <div className="form__group">
              <label htmlFor="subject">Subject:</label>
              <div className="input__group">
                <span className="input-quote">{'"'}</span>
                <input
                  name="subject"
                  type="text"
                  onChange={this.handleFormInputs}
                  value={this.state.subject}
                  className={cx({
                    invalid: !this.state.subject && this.state.attempt > 0,
                  })}
                  required
                />
                <span className="input-quote">{'"'}</span>
              </div>
            </div>
            <div className="form__group">
              <label htmlFor="message">Message:</label>
              <div className="input__group">
                <span className="input-quote">{'"'}</span>
                <textarea
                  name="message"
                  onChange={this.handleFormInputs}
                  value={this.state.message}
                  className={cx({
                    invalid: !this.state.message && this.state.attempt > 0,
                  })}
                  required
                />
                <span className="input-quote">{'"'}</span>
              </div>
            </div>
          </form>
        </div>
      </Section>
    )
  }
}

export default Contact
