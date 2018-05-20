import React, { Component } from 'react'
import { MeVar } from './Variable'
import { css } from 'react-emotion'

const nav = css`
  &,
  .nav-menu {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  .nav-menu {
    margin-left: 10px;
  }

  .nav-menu__item {
    list-style: none;
    margin: 0 10px;
    cursor: pointer;

    &:after {
      content: ',';
    }

    :hover {
      font-weight: normal;
    }
  }
`

export class Nav extends Component {
  render() {
    return (
      <nav className={nav}>
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
