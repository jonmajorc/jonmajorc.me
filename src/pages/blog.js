/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import React from 'react'
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'

/***************************************************************************\
  components 
\***************************************************************************/
import { Divider } from '../components/divider'
import { FeaturedBlog } from '../components/featured-blog'
import SEO from '../components/seo'
import Layout from '../components/main-layout'

const Blog = ({ data, location }) => {
  let siteTitle = data.site.siteMetadata.title
  let posts = data.allMarkdownRemark.edges
  let categories = React.useMemo(
    () =>
      Array.from(
        new Set(posts.flatMap((post) => post.node.frontmatter.categories))
      ),
    [posts]
  )
  console.log(categories)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <FeaturedBlog
        sx={sx.featuredBlogPost}
        to={posts[0].node.fields.slug}
        title={posts[0].node.frontmatter.title}
        date={posts[0].node.frontmatter.date}
        image={posts[0].node.frontmatter.banner.childImageSharp.fluid}
        excerpt={posts[0].node.excerpt}
      />
      <Divider />
    </Layout>
  )
}

let sx = {
  container: {},
  featuredBlogPost: {
    cursor: 'pointer',
  },
}

export default Blog

export const pageQuery = graphql`
  query {
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
            categories
            banner {
              childImageSharp {
                fluid(maxWidth: 720, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
