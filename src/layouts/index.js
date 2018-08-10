// modules
import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import get from 'lodash/get'
import Component from '../components/Component'

// styles
import '../scss/index.scss'

class DefaultLayout extends Component {
  render() {
    const { children } = this.props
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const notes = get(this, 'props.data.allMarkdownRemark.edges')
    return (
      <div role="application">
        <Header />
        <main>{children({ ...this.props, siteTitle, notes })}</main>
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.func,
}

export default DefaultLayout

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
