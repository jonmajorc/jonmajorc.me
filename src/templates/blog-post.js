/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx, Styled } from 'theme-ui'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

/***************************************************************************\
 components
 \***************************************************************************/
import { FeaturedBlog } from 'components/featured-blog'
import Layout from 'components/main-layout'
import SEO from 'components/seo'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article sx={sx.post}>
        <FeaturedBlog
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          image={post.frontmatter.banner.childImageSharp.fluid}
          bannerCredit={
            <span sx={sx.photoCredit}>
              Photo by {post.frontmatter.bannerCredit} on{' '}
              <a href="#" sx={sx.instagramLink}>
                Instagram
              </a>
            </span>
          }
          excerpt={post.excerpt}
        />

        <section
          sx={sx.section}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr />
        <footer></footer>
      </article>

      <nav sx={sx.navForPosts}>
        <ul sx={sx.navList}>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

let sx = {
  post: {
    width: [320, , , 720],
    margin: '0 auto',
  },
  banner: {
    maxWidth: 720,
    height: 480,
    margin: '0 auto',
    borderRadius: 4,
  },
  photoCredit: {
    display: 'block',
    width: '100%',
    textAlign: 'right',
  },
  instagramLink: {
    color: 'teal',
    fontWeight: 'bold',
    '&:active': {
      color: 'teal',
    },
  },
  navForPosts: {
    width: [320, , , 720],
    margin: '0 auto',
  },
  navList: {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `space-between`,
    listStyle: `none`,
    padding: 0,
  },
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        bannerCredit
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
`
