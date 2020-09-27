/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const NavLink = (props) => {
  return (
    <Link
      activeClassName="active"
      sx={{
        variant: 'styles.link',
      }}
      to={props.children.split(' ').join('-').toLowerCase()}
    >
      {props.children}
    </Link>
  )
}

const Nav = () => {
  return (
    <div sx={nav}>
      <span>active link here</span>
      <nav>
        <ul
          sx={{
            listStyle: 'none',
            display: 'flex',

            'li:not(:first-child)': {
              marginLeft: 4,
              marginBottom: 0,
            },
          }}
        >
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Uses</NavLink>
          </li>
          <li>
            <NavLink>Blog</NavLink>
          </li>
          <li>
            <NavLink>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

let nav = {}

export { Nav }
