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
import { Divider } from '../components/divider'
import { CollaborateCTA } from '../components/collaborate-cta'
import { ContentCard } from '../components/content-card'
import { PageHeader } from '../components/page-header'
import Layout from '../components/main-layout'

/***************************************************************************\
  assets
\***************************************************************************/
import Mercedes from '../images/mercedes.png'
import MelSuge from '../images/mel-suge.png'
import Walking from '../images/walking.png'
import SEO from '../components/seo'

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const { author } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <PageHeader
        sx={{
          marginTop: 144,
          margin: '0 auto',
        }}
        header={
          <React.Fragment>
            <Styled.h1>&#47;&#47; Welcome,</Styled.h1>
            <Styled.h1>&#47;&#47; to my Journey!</Styled.h1>
          </React.Fragment>
        }
        text={
          <React.Fragment>
            I write code. I run with <strong>Jesus, the Son of God.</strong>{' '}
            Coffee in one hand and a camera in the other...
          </React.Fragment>
        }
        image={data.banner.childImageSharp.fluid}
        alt={author.name}
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

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    banner: file(absolutePath: { regex: "/journey.png/" }) {
      childImageSharp {
        fluid(maxWidth: 341, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
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
