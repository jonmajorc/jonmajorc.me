// modules
import React from 'react'
import { CallingCardHeader, CallingCardFooter } from './CallingCard'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import cx from 'classnames'

// styles
import '../scss/main.scss'

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
      <>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        />
        <div role="application">
          <CallingCardHeader />
          <main className={cx(props.className)}>{children}</main>
          <CallingCardFooter />
        </div>
      </>
    )}
  />
)

AppLayout.propTypes = {
  className: PropTypes.oneOf(['blog-post']),
}

export default AppLayout
