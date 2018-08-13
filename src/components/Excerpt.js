// Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Github } from '../assets/social_github.svg'
import { ReactComponent as Instagram } from '../assets/social_instagram.svg'
import { ReactComponent as LinkedIn } from '../assets/social_linkedIn.svg'
import { ReactComponent as Twitter } from '../assets/social_twitter.svg'

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <small>@jonmajorc</small>
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

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
}

export default Header
