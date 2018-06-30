// modules
import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'

// styles
import '../scss/index.scss'

class DefaultLayout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div role="application">
        <Header />
        <main>{children()}</main>
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.func,
}

export default DefaultLayout
