/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Fragment } from 'react'
import { Nav } from 'components/nav'
import { Footer } from 'components/footer'
import { PageHeader } from 'components/page-header'
import { Divider } from 'components/divider'
import { CollaborateCTA } from 'components/collaborate-cta'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import 'src/styles.css'

const Layout = ({ location, children, ...props }) => {
  return (
    <Fragment>
      <div className="nav-wrapper">
        <Nav location={location} />
      </div>
      <main
        sx={{
          width: '100%',
          margin: '0 auto',
          marginTop: [50, 50, 50, 144],
          padding: ['0 20px', '0 50px'],
        }}
      >
        <PageHeader
          sx={sx.pageHeader}
          header={
            <React.Fragment>
              <Styled.h1>
                &#47;&#47; {props.data.mdx.frontmatter.title}
              </Styled.h1>
              <i sx={sx.lastUpdatedText}>
                Last updated: {props.data.mdx.frontmatter.date}
              </i>
            </React.Fragment>
          }
          text={
            <div>
              <Styled.p>{props.data.mdx.frontmatter.featured.title}</Styled.p>
              <Styled.p>{props.data.mdx.frontmatter.featured.url}</Styled.p>
            </div>
          }
          image={{
            src: props.data.mdx.frontmatter.banner.childImageSharp.fluid,
            sx: { height: [140, 240], width: [140, 240] },
          }}
          alt={null}
        />
        <Divider sx={sx.divider} />
        <div sx={sx.content}>
          <MDXRenderer sx={sx.content}>{props.data.mdx.body}</MDXRenderer>
          <CollaborateCTA sx={sx.letsCollaborate} />
        </div>
      </main>
      <Footer placeBottom={props.placeFooterBottom} />
    </Fragment>
  )
}

let sx = {
  pageHeader: {
    marginTop: 144,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    margin: '72px 0',
  },
  letsCollaborate: {
    marginTop: 72,
  },
  lastUpdatedText: {
    display: 'block',
    marginTop: 15,
  },
  content: {
    maxWidth: 1024,
    margin: '0 auto',
    marginTop: 175,

    li: {
      margin: '10px 0',
    },

    a: {
      color: 'darkOrange',

      ':hover': {
        color: 'beige',
      },
    },

    hr: {
      margin: '30px 0',
    },

    h3: {
      fontWeight: 'bold',
    },
  },
}

export default Layout

export const pageQuery = graphql`
  query MdxLink($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        featured {
          title
          url
        }
        description
        date(formatString: "MMMM DD, YYYY")
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
