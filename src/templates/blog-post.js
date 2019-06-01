import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
import BlogDate from '../components/BlogDate'
import Img from 'gatsby-image'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <Layout className="blog-post">
        <Helmet title={post.frontmatter.title}>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          />
        </Helmet>
        <header className="blog-post__header">
          <h1 className="blog-post__header__h1">{post.frontmatter.title}</h1>
          <BlogDate
            className="blog-post__header__date"
            date={post.frontmatter.date}
          />
          {post.frontmatter.cover_image && (
            <>
              <Img
                fluid={post.frontmatter.cover_image.childImageSharp.fluid}
                alt={post.frontmatter.cover_image_alt || 'Cover photo of blog.'}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.cover_image_credit,
                }}
              />
            </>
          )}
        </header>
        {post.frontmatter.description && (
          <span>{post.frontmatter.description}</span>
        )}
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//         cover_image_alt
//         cover_image_credit
//         cover_image {
//           ... on File {
//             childImageSharp {
//               fluid(maxWidth: 640) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
