import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-mdx'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'
import BlogDate from '../components/BlogDate'
import Img from 'gatsby-image'
import { rhythm } from '../utils/typography'

export default class BlogPost extends React.Component {
  render() {
    const { mdx } = this.props.data
    const { pageContext } = this.props

    return (
      <Layout className="blog-post">
        <header className="blog-post__header">
          <h1 className="blog-post__header__h1">{mdx.frontmatter.title}</h1>
          <BlogDate
            className="blog-post__header__date"
            date={mdx.frontmatter.date}
          />
          {mdx.frontmatter.cover_image && (
            <>
              <Img
                className="blog-post__header__image"
                fluid={mdx.frontmatter.cover_image.childImageSharp.fluid}
                alt={mdx.frontmatter.cover_image_alt || 'Cover photo of blog.'}
              />
              <span className="blog-post__header__image-credit">
                <ReactMarkdown source={mdx.frontmatter.cover_image_credit} />
              </span>
            </>
          )}
          {/* {mdx.frontmatter.description && (
            <div className="blog-post__header__desc">
              {mdx.frontmatter.description}
            </div>
          )} */}
          <hr className="blog-post__divider" />
        </header>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
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
          <li>
            {pageContext.previous && (
              <Link to={pageContext.previous.fields.slug} rel="prev">
                ← {pageContext.previous.frontmatter.title}
              </Link>
            )}
          </li>

          <li>
            {pageContext.next ? (
              <Link to={pageContext.next.fields.slug} rel="next">
                {pageContext.next.frontmatter.title} →
              </Link>
            ) : (
              <>
                <i>New post coming soon...</i> 👋
              </>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query MDXQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        # description
        date(formatString: "DD MMMM, YYYY")
        cover_image_credit
        cover_image_alt
        cover_image {
          childImageSharp {
            fluid(maxWidth: 720, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      code {
        body
      }
    }
  }
`
