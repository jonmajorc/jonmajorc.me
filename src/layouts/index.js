// modules
import React from 'react'
import PropTypes from 'prop-types'

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
