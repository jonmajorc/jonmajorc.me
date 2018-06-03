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
              <input type="text" />
            </div>
            <div className="form__group">
              <label htmlFor="subject">Subject:</label>
              <input type="text" />
            </div>
            <div className="form__group">
              <label htmlFor="message">Message:</label>
              <textarea />
            </div>
          </form>
        </div>
      </Section>
    )
  }
}

export default Notes
