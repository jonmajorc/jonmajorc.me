// Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Logo } from '../assets/jmc-logo.svg'
import Link from 'gatsby-link'

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <Logo />
        </Link>
        <span className="header__jonmajorc">@jonmajorc</span>
      </header>
    )
  }
}

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
}

export default Header
