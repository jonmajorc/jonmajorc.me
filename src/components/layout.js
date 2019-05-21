// modules
import React from 'react'
import { CallingCardHeader, CallingCardFooter } from './CallingCard'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

// styles
import '../scss/main.scss'

export default ({ children }) => (
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
          <main>{children}</main>
          <CallingCardFooter />
        </div>
      </>
    )}
  />
)
