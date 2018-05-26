// Modules
import React, { Component } from 'react'
import { LetVar } from './Variable'
import { css } from 'react-emotion'
import PropTypes from 'prop-types'
import Nav from './Nav'
import MajorBlazer from './MajorBlazer'

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <LetVar semi="true" />
        <div className="header--wrapper">
          <MajorBlazer className="major-blazer" />
          <Nav />
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
}

export default Header
