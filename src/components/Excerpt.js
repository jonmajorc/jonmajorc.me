// Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Github from '!svg-react-loader!../assets/svg/social_github.svg'
import Instagram from '!svg-react-loader!../assets/svg/social_instagram.svg'
import LinkedIn from '!svg-react-loader!../assets/svg/social_linkedIn.svg'
import Twitter from '!svg-react-loader!../assets/svg/social_twitter.svg'
import { Link } from 'gatsby'

export class Excerpt extends Component {
  render() {
    return (
      <header className="header">
        <Link className="me" to="/" activeClassName="active">
          @jonmajorc
        </Link>
        <small>jmajorcondon@gmail.com</small>
        <ul className="header__social">
          <li className="header__social__icon">
            <a href="https://github.com/jonmajorc">
              <Github />
            </a>
          </li>
          <li className="header__social__icon">
            <a href="https://www.instagram.com/jonmajorc">
              <Instagram />
            </a>
          </li>
          <li className="header__social__icon">
            <a href="https://www.linkedin.com/in/jonmajorc">
              <LinkedIn />
            </a>
          </li>
          <li className="header__social__icon">
            <a href="https://twitter.com/jonmajorc">
              <Twitter />
            </a>
          </li>
        </ul>
      </header>
    )
  }
}

Excerpt.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
}

export default Excerpt
