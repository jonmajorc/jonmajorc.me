/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby'

/***************************************************************************\
  components 
\***************************************************************************/
import { Divider } from 'components/divider'
import { FeaturedBlog } from 'components/featured-blog'
import { BlogCard } from 'components/blog-card'
import SEO from 'components/seo'
import Layout from 'components/main-layout'

const Blog = ({ data, location }) => {
  let siteTitle = data.site.siteMetadata.title
  let posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <Styled.h4 sx={sx.latestText}>Latest!</Styled.h4>
      <FeaturedBlog
        sx={sx.featuredBlogPost}
        to={posts[0].node.fields.slug}
        title={posts[0].node.frontmatter.title}
        date={posts[0].node.frontmatter.date}
        image={posts[0].node.frontmatter.banner.childImageSharp.fluid}
        excerpt={posts[0].node.excerpt}
      />
      <Divider sx={sx.divider} />
      {posts.map(({ node: post }, index) => {
        return (
          <BlogCard
            to={post.fields.slug}
            image={post.frontmatter.banner.childImageSharp.fluid}
            title={post.frontmatter.title}
            excerpt={post.excerpt}
            sx={{ ...sx.blogCard, marginTop: index === 0 ? 172 : 40 }}
          />
        )
      })}
    </Layout>
  )
}

let sx = {
  container: {},
  latestText: {
    marginBottom: '25px',
    transform: 'rotate(-20deg)',
    display: 'inline-block',
    position: 'relative',
    left: '30%',
    display: 'none',
  },
  featuredBlogPost: {
    cursor: 'pointer',
  },
  divider: {
    margin: '72px 0',
  },
  blogCard: {
    margin: '0 auto',
    marginTop: 40,
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
          excerpt(pruneLength: 100)
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
