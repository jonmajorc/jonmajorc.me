/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Bio } from '../components/bio'
import { Divider } from '../components/divider'
import { CollaborateCTA } from '../components/collaborate-cta'
import { ContentCard } from '../components/content-card'
import Mercedes from '../images/mercedes.png'
import MelSuge from '../images/mel-suge.png'
import Walking from '../images/walking.png'
import Layout from '../components/main-layout'
import SEO from '../components/seo'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Bio
        sx={{
          marginTop: 144,
          margin: '0 auto',
        }}
      />
      <Divider
        sx={{
          marginTop: 72,
        }}
      />
      <CollaborateCTA sx={{ width: 1048, margin: '0 auto', marginTop: 72 }} />
      <ContentCard
        reverse
        header="// Business stills / movers"
        img={MelSuge}
        alt="Urban Uplander Pet Sitting"
        sx={{ width: 1048, margin: '0 auto', marginTop: 72 }}
      />
      <ContentCard
        header="// Car stills & movers"
        img={Mercedes}
        alt="Mercedes Benz"
        sx={{ width: 1048, margin: '0 auto', marginTop: 72 }}
      />
      <ContentCard
        reverse
        header="// Random stills & movers"
        img={Walking}
        sx={{ width: 1048, margin: '0 auto', marginTop: 72 }}
      />
    </Layout>
  )
}

export default BlogIndex

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
          }
        }
      }
    }
  }
`
