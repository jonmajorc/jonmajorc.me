// modules
import React from 'react'
import Link from 'gatsby-link'
import { ThemeProvider } from 'emotion-theming'
import styled, { css } from 'react-emotion'
import { rhythm, scale } from '../utils/typography'
import PropTypes from 'prop-types'

// components
import theme from '../utils/theme'
import Header from '../components/Header'

const App = styled('main')`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(40)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const Children = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(27)};
`

class DefaultLayout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <App>
          <Header />
          <Children>{children()}</Children>
        </App>
      </ThemeProvider>
    )
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.func,
}

export default DefaultLayout
