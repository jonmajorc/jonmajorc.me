// modules
import React from 'react'
import PropTypes from 'prop-types'
import Excerpt from '../components/Excerpt'
import get from 'lodash/get'

// styles
import '../scss/main.scss'

class DefaultLayout extends React.Component {
  render() {
    const { children } = this.props
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const notes = get(this, 'props.data.allMarkdownRemark.edges')
    return (
      <div role="application">
        <Excerpt />
        <main>{children({ ...this.props, siteTitle, notes })}</main>
        <footer>
          <Excerpt />
        </footer>
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
