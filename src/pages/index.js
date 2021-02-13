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
import { PageHeader } from 'components/page-header'
import { Button } from 'components/button'
import Layout from 'components/main-layout'
import { mq } from 'src/gatsby-plugin-theme-ui'
import { ServiceAvailability } from 'components/service-availability'

/***************************************************************************\
 assets
 \***************************************************************************/
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
            <strong sx={sx.currentLocation}>
              Current Location: <i>Wisconsin</i>
            </strong>
            <Styled.h1 sx={sx.welcomeHeader}>LET’S COLLABORATE.</Styled.h1>
          </React.Fragment>
        }
        text={
          <React.Fragment>
            <Styled.p sx={sx.welcomeSubText}>
              Hello, I am Jon Major!{' '}
              <strong sx={sx.boldCTA}>
                I am looking to work with dope brands I believe in through the
                art of photography and filmmaking.
              </strong>{' '}
              I'm am also a fulltime software developer with 7 years paid
              experience.{' '}
              <strong sx={sx.boldCTA}>
                Make sure to reach out if you’re a creative living in Wisconsin!
              </strong>
            </Styled.p>
            <Button sx={sx.contactButton}>hey@jonmajorc.me</Button>
            <ServiceAvailability sx={sx.serviceAvailability} />
          </React.Fragment>
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
              width: 354,
              height: 354,
            },
          },
        }}
        alt="a long road resembling the journey of life."
      />
    </Layout>
  )
}

let sx = {
  pageHeader: {
    marginTop: 144,
    margin: '0 auto',
  },
  contactButton: {
    marginTop: 32,
    '*': {
      fontWeight: 'bold',
      fontSize: 0,
    },
  },
  currentLocation: {
    letterSpacing: 1,
    marginBottom: 19,
    color: 'darkRed',
  },
  boldCTA: {
    '&&&': {
      color: 'darkOrange',
    },
  },
  serviceAvailability: {
    marginTop: 22,
  },
  welcomeHeader: {
    color: 'w',

    [mq[0]]: {
      color: 'w',
    },
    [mq[1]]: {
      whiteSpace: 'pre-wrap',
      color: 'darkRed',
      whiteSpace: 'nowrap',
    },
  },
  welcomeSubText: {
    color: 'w',

    [mq[1]]: {
      color: 'text',
      strong: {
        color: 'b',
      },
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
    banner: file(absolutePath: { regex: "/jmc_v7.png/" }) {
      childImageSharp {
        fluid(maxWidth: 354, quality: 100) {
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
