import React from 'react'

// components
import Section from './Section'

class Notes extends React.Component {
  render() {
    return (
      <Section
        className="contact"
        id="contact"
        section="contact"
        opening="{"
        closing="}"
      >
        <div className="content">
          <form className="form" action="">
            <div className="form__group">
              <label htmlFor="name">Name:</label>
              <span className="input-quote">{'"'}</span>
              <input type="text" />
              <span className="input-quote">{'"'}</span>
            </div>
            <div className="form__group">
              <label htmlFor="subject">Subject:</label>
              <span className="input-quote">{'"'}</span>
              <input type="text" />
              <span className="input-quote">{'"'}</span>
            </div>
            <div className="form__group">
              <label htmlFor="message">Message:</label>
              <span className="input-quote">{'"'}</span>
              <textarea />
              <span className="input-quote">{'"'}</span>
            </div>
          </form>
        </div>
      </Section>
    )
  }
}

export default Notes
