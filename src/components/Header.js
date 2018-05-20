// Modules
import React, { Component } from 'react'
import { LetVar } from './Variable'
import { css } from 'react-emotion'
import PropTypes from 'prop-types'
import Nav from './Nav'
import MajorBlazer from './MajorBlazer'

/***************************************************************************\
  styling
\***************************************************************************/
const header = css`
  width: 100%;
  min-height: 150px;
  position: relative;

  .header--wrapper {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export class Header extends Component {
  render() {
    return (
      <header className={header}>
        <LetVar />
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
