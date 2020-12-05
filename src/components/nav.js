/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Button } from 'components/button'
import Logo from '../images/jmc_v7.inline.svg'

/***************************************************************************\
  assets
\***************************************************************************/
import Arrow from '../images/arrow.inline.svg'

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
    <nav sx={sx.nav} ref={navRef} onClick={() => setIsOpen(!isOpen)}>
      <div sx={sx.navActiveContainer}>
        <Logo sx={sx.logo} />
        <span sx={sx.activeLink}>
          {location.pathname === '/' ? 'home' : location.pathname.split('/')[1]}
        </span>
        <Arrow sx={sx.arrow} />
      </div>
      <ul
        sx={{
          ...sx.navItems,
          ...(isOpen
            ? {
                display: 'block',
                opacity: 1,
              }
            : {
                display: 'none',
                opacity: 0,
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

let sx = {
  nav: {
    position: 'fixed',
    top: '20px',
    minWidth: 200,
    backgroundColor: 'w',
    height: 'auto',
    display: 'inline-flex',
    flexDirection: 'column',
    zIndex: 99999,
    cursor: 'pointer',
    borderRadius: 35,
    border: 'borderBlack1px',
    boxShadow: 'shadow2',
  },
  navActiveContainer: {
    border: 'none',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: 0,
  },
  logo: {
    width: 62,
    padding: '9px',

    path: {
      fill: 'b',
    },
  },
  arrow: {
    marginRight: 22,
    filter: 'dropShadow1',
  },
  activeLink: {
    display: 'block',
    fontSize: [2],
    textAlign: 'center',
    color: 'b',
    textDecoration: 'underline',
    padding: '0 20px',
    textTransform: 'capitalize',
    filter: 'dropShadow1',
  },
  navItems: {
    position: 'relative',
    margin: 0,
    listStyle: 'none',
    backgroundColor: 'midnight',
    borderRadius: '0 0 25px 25px',
    padding: 30,
    transition: 'all 250ms cubic-bezier(0.74, 0.01, 0.32, 0.68)',
    backgroundColor: 'w',
    borderBottomLeftRadius: '35px',
    borderBottomRightRadius: '35px',
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
