/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import { Nav } from '../components/nav'
import { Footer } from '../components/footer'

const Layout = ({ location, title, children }) => {
  return (
    <Fragment>
      {/* <Nav /> */}
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
      <Footer />
    </Fragment>
  )
}

export default Layout
