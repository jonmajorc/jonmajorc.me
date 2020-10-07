/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Button } from '../components/button'
import Logo from '../images/jmc_v7.inline.svg'

const NavLink = ({ className, ...props }) => {
  return (
    <Link
      className={className}
      activeClassName="active"
      sx={{
        variant: 'styles.link',
      }}
      to={props.to}
    >
      {props.children}
    </Link>
  )
}

const Nav = ({ location }) => {
  let navRef = React.useRef(null)
  let [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    let handleClickAway = (e) => {
      if (!navRef.current.contains(e.target)) setIsOpen(false)
    }
    window.addEventListener('click', handleClickAway)
    return () => window.removeEventListener('click', handleClickAway)
  }, [])

  return (
    <nav sx={sx.container} ref={navRef}>
      <button sx={sx.navButton} onClick={() => setIsOpen(!isOpen)}>
        <Logo sx={sx.logo} />
        <span sx={sx.activeLink}>
          {location.pathname === '/' ? 'home' : location.pathname.split('/')[1]}
        </span>
      </button>
      <ul
        sx={{
          ...sx.navItems,
          ...(isOpen
            ? {
                display: 'block',
              }
            : {
                display: 'none',
              }),
        }}
      >
        <li>
          <NavLink to="/" className={location.pathname === '/' && 'active'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={location.pathname === '/about' && 'active'}
            sx={sx.navLink}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={location.pathname === '/blog' && 'active'}
            sx={sx.navLink}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/uses"
            className={location.pathname === '/uses' && 'active'}
            sx={sx.navLink}
          >
            Uses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={location.pathname === '/contact' && 'active'}
            sx={sx.navLink}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <Button sx={sx.collaborateButton}>Collaborate!</Button>
        </li>
      </ul>
    </nav>
  )
}

let LOGO_WIDTH = 110
let sx = {
  container: {
    position: 'sticky',
    top: 18,
    left: 122,
    minWidth: 240,
    height: 70,
    display: 'inline-flex',
    flexDirection: 'column',
    zIndex: 99999,
  },
  navButton: {
    cursor: 'pointer',
    borderRadius: 50,
    boxShadow: 'shadow1',
    zIndex: 10,
    backgroundColor: 'b',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    border: 'none',
    padding: 0,
  },
  logo: {
    width: LOGO_WIDTH,
    padding: '4px',

    path: {
      fill: 'w',
    },
  },
  activeLink: {
    display: 'block',
    fontSize: [2],
    width: '100%',
    color: 'w',
    textAlign: 'center',
    color: 'beige',
    textDecoration: 'underline',
    paddingRight: LOGO_WIDTH / 2,
    textTransform: 'capitalize',
  },
  navItems: {
    position: 'relative',
    top: -35,
    margin: 0,
    listStyle: 'none',
    backgroundColor: 'midnight',
    borderRadius: '0 0 25px 25px',
    padding: 30,
    paddingTop: 60,
  },
  navLink: {
    display: 'block',
    marginTop: 10,
  },
  collaborateButton: {
    marginTop: 30,
    padding: '13px 0',
    width: '100%',
  },
}

export { Nav }
