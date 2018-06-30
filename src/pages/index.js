// modules
import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// components
import Bio from '../components/Bio'
import Projects from '../components/projects'
import Notes from '../components/Notes'
import Contact from '../components/Contact'
import Social from '../components/Social'
import { rhythm } from '../utils/typography'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const notes = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        <Projects />
        <Notes notes={notes} />
        <Contact />
        <Social />
      </div>
    )
  }
}

export default Index

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
          }
        }
      }
    }
  }
`
