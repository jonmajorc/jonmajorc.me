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
import { CollaborateCTA } from 'components/collaborate-cta'
import { ContentCard } from 'components/content-card'
import { PageHeader } from 'components/page-header'
import Layout from 'components/main-layout'
import { mq } from 'src/gatsby-plugin-theme-ui'

/***************************************************************************\
 assets
 \***************************************************************************/
import Mercedes from 'images/mercedes.png'
import MelSuge from 'images/mel-suge.png'
import Walking from 'images/walking.png'
import SEO from 'components/seo'

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <PageHeader
        sx={sx.pageHeader}
        header={
          <React.Fragment>
            <Styled.h1 sx={sx.welcomeHeader}>&#47;&#47; Welcome,</Styled.h1>
            <Styled.h1 sx={sx.welcomeHeader}>
              &#47;&#47; to my Journey!
            </Styled.h1>
          </React.Fragment>
        }
        text={
          <span sx={sx.welcomeSubText}>
            I write code. I run with <strong>Jesus, the Son of God.</strong>{' '}
            Coffee in one hand and a camera in the other...
          </span>
        }
        image={{
          src: data.banner.childImageSharp.fluid,
          sx: {
            position: 'absolute !important',
            top: 0,
            left: 0,
            right: 0,
            width: '100%',
            zIndex: -1,
            height: 450,
            borderRadius: 0,

            [mq[1]]: {
              position: 'relative !important',
              width: 348,
            },
          },
        }}
        alt="a long road resembling the journey of life."
      />
      <Divider sx={sx.divider} />
      <CollaborateCTA sx={sx.collaborateCard} />
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
    margin: '0 auto',
    marginTop: 240,
    [mq[1]]: {
      marginTop: 190,
    },
  },
  contentCard: {
    margin: '0 auto',
    marginTop: 72,
  },
  welcomeHeader: {
    color: 'w',
    fontSize: 4,

    [mq[0]]: {
      color: 'w',
    },
    [mq[1]]: {
      whiteSpace: 'pre-wrap',
      fontSize: 6,
      color: 'text',
      whiteSpace: 'nowrap',
    },
  },
  welcomeSubText: {
    color: 'w',

    [mq[1]]: {
      color: 'text',
    },
  },
  divider: {
    marginTop: 175,

    [mq[0]]: {
      marginTop: 125,
    },
    [mq[1]]: {
      marginTop: 75,
    },
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
