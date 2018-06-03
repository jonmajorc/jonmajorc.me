// modules
import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

// components
import theme from '../utils/theme'

// styles
import '../scss/index.scss'

class DefaultLayout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div role="application">
        <main>{children()}</main>
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.func,
}

export default DefaultLayout
