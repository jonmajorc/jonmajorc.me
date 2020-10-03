/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import { Nav } from '../components/nav'
import { Footer } from '../components/footer'
import '../styles.css'

const Layout = ({ location, children, ...props }) => {
  return (
    <Fragment>
      <Nav location={location} />
      <main
        sx={{
          width: '100%',
          margin: '0 auto',
          marginTop: 144,
        }}
      >
        {children}
      </main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
      <Footer placeBottom={props.placeFooterBottom} />
    </Fragment>
  )
}

export default Layout
