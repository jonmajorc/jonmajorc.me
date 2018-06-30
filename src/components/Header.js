// Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Logo } from '../assets/jmc-logo.svg'

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <Logo />
      </header>
    )
  }
}

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
}

export default Header
