// modules
import React from 'react'
import { CallingCardHeader, CallingCardFooter } from './CallingCard'
import { StaticQuery, graphql } from 'gatsby'
import Nav from './Nav'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import cx from 'classnames'

// styles
import '../scss/main.scss'

function checkIsIDevice() {
  const iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod',
  ]

  if (
    typeof window !== 'undefined' &&
    typeof window.navigator !== 'undefined'
  ) {
    if (!!navigator.platform) {
      while (iDevices.length) {
        if (navigator.platform === iDevices.pop()) {
          return true
        }
      }
    }
  }

  return false
}

export const IDeviceContext = React.createContext()

const AppLayout = ({ children, ...props }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <IDeviceContext.Provider value={checkIsIDevice()}>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        />
        <div role="application">
          <CallingCardHeader />
          <Nav />
          <main className={cx(props.className)}>{children}</main>
          <CallingCardFooter />
        </div>
      </IDeviceContext.Provider>
    )}
  />
)

AppLayout.propTypes = {
  className: PropTypes.oneOf(['blog-post']),
}

export default AppLayout
