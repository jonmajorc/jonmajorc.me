import React, { Component } from 'react'
import { MeVar } from './Variable'

export class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <MeVar noSemi={true} />
        <ul className="nav-menu">
          {`= {`}
          <li className="nav-menu__item">working</li>
          <li className="nav-menu__item">projects</li>
          <li className="nav-menu__item">blog</li>
          <li className="nav-menu__item">contact</li>
          <li className="nav-menu__item">social</li>
          {`}`}
        </ul>
      </nav>
    )
  }
}

export default Nav
