import React from 'react'
import { Link } from 'gatsby'

const Nav = () => {
  return (
    <nav className="Nav">
      <ul className="Nav__menu">
        <li className="Nav__menu__item">
          <Link activeClassName="Nav__menu__item--active" to="/">
            Home
          </Link>
        </li>
        <li className="Nav__menu__item">
          <Link activeClassName="Nav__menu__item--active" to="/blogs">
            Blog
          </Link>
        </li>
        <li className="Nav__menu__item">
          <Link activeClassName="Nav__menu__item--active" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
