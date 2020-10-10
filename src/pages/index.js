/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby'
import { useMedia } from 'react-media'

/***************************************************************************\
 components
 \***************************************************************************/
import { Divider } from '../components/divider'
import { CollaborateCTA } from '../components/collaborate-cta'
import { ContentCard } from '../components/content-card'
import { PageHeader } from '../components/page-header'
import Layout from '../components/main-layout'
import { GLOBAL_MEDIA_QUERIES } from '../gatsby-plugin-theme-ui'

/***************************************************************************\
 assets
 \***************************************************************************/
import Mercedes from '../images/mercedes.png'
import MelSuge from '../images/mel-suge.png'
import Walking from '../images/walking.png'
import SEO from '../components/seo'

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES })

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <PageHeader
        sx={sx.pageHeader}
        header={
          <React.Fragment>
            <Styled.h1
              sx={{
                ...(matches.small && { color: 'w' }),
                ...(matches.medium && { color: 'w', whiteSpace: 'pre-wrap' }),
                ...(matches.large && { color: 'text', whiteSpace: 'nowrap' }),
                '&&': {
                  fontSize: matches.medium && 5,
                  fontSize: matches.small && 4,
                },
              }}
            >
              &#47;&#47; Welcome,
            </Styled.h1>
            <Styled.h1
              sx={{
                ...(matches.small && { color: 'w' }),
                ...(matches.medium && { color: 'w', whiteSpace: 'pre-wrap' }),
                ...(matches.large && { color: 'text', whiteSpace: 'nowrap' }),
                '&&': {
                  fontSize: matches.medium && 5,
                  fontSize: matches.small && 4,
                },
              }}
            >
              &#47;&#47; to my Journey!
            </Styled.h1>
          </React.Fragment>
        }
        text={
          <span
            sx={{
              ...(matches.small && { color: 'w' }),
              ...(matches.medium && { color: 'w' }),
              ...(matches.large && { color: 'text' }),
            }}
          >
            I write code. I run with <strong>Jesus, the Son of God.</strong>{' '}
            Coffee in one hand and a camera in the other...
          </span>
        }
        image={{
          src: data.banner.childImageSharp.fluid,
          ...(matches.small && { className: 'full-width-banner' }),
          ...(matches.medium && { className: 'full-width-banner' }),
          ...(matches.large && { className: null }),
        }}
        alt="a long road resembling the journey of life."
      />
      <Divider
        sx={{
          ...(matches.small && { marginTop: 175 }),
          ...(matches.medium && { marginTop: 125 }),
          ...(matches.large && { marginTop: 75 }),
        }}
      />
      <CollaborateCTA
        sx={{
          ...sx.collaborateCard,
          ...(matches.small && { marginTop: 240 }),
          ...(matches.medium && { marginTop: 190 }),
        }}
      />
      <ContentCard
        reverse
        header="// Business stills / movers"
        img={MelSuge}
        alt="Urban Uplander Pet Sitting"
        sx={sx.contentCard}
      />
      <ContentCard
        header="// Car stills & movers"
        img={Mercedes}
        alt="Mercedes Benz"
        sx={sx.contentCard}
      />
      <ContentCard
        reverse
        header="// Random stills & movers"
        img={Walking}
        sx={sx.contentCard}
      />
    </Layout>
  )
}

let sx = {
  pageHeader: {
    marginTop: 144,
    margin: '0 auto',
  },
  collaborateCard: {
    maxWidth: 1048,
    margin: '0 auto',
  },
  contentCard: {
    maxWidth: 1048,
    margin: '0 auto',
    marginTop: 72,
  },
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
