/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import '../styles.css'

const Layout = ({ location, children, ...props }) => {
  return (
    <Fragment>
      <Header />
      <main
        sx={{
          width: '100%',
          margin: '0 auto',
          marginTop: [50, 50, 50, 144],
          padding: ['0 20px', '0 50px'],
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
