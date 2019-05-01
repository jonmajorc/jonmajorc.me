// Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Handle from './Handle'

import Github from '!svg-react-loader!../assets/social/social_github.svg'
import Instagram from '!svg-react-loader!../assets/social/social_instagram.svg'
import LinkedIn from '!svg-react-loader!../assets/social/social_linkedIn.svg'
import Twitter from '!svg-react-loader!../assets/social/social_twitter.svg'

export class ContactCard extends Component {
  render() {
    return (
      <header className="ContactCard">
        <Handle />
        <small>jmajorcondon@gmail.com</small>
        <ul className="ContactCard__social">
          <li className="ContactCard__social__icon">
            <a href="https://github.com/jonmajorc">
              <Github />
            </a>
          </li>
          <li className="ContactCard__social__icon">
            <a href="https://www.instagram.com/jonmajorc">
              <Instagram />
            </a>
          </li>
          <li className="ContactCard__social__icon">
            <a href="https://www.linkedin.com/in/jonmajorc">
              <LinkedIn />
            </a>
          </li>
          <li className="ContactCard__social__icon">
            <a href="https://twitter.com/jonmajorc">
              <Twitter />
            </a>
          </li>
        </ul>
      </header>
    )
  }
}

ContactCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
}

export default ContactCard
