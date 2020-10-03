/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Styled } from 'theme-ui'
import InDevelopment from '../images/in-dev.inline.svg'

import { NewContentCard } from './new-content-card'

const Bio = (props) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      banner: file(absolutePath: { regex: "/journey.png/" }) {
        childImageSharp {
          fluid(maxWidth: 341, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <header sx={bio} className={props.className}>
      <div className="bio__hello">
        <Styled.h1>&#47;&#47; Welcome,</Styled.h1>
        <Styled.h1>&#47;&#47; to my Journey!</Styled.h1>
        <span sx={sx.text}>
          I write code. I run with <strong>Jesus, the Son of God.</strong>{' '}
          Coffee in one hand and a camera in the other...
        </span>
      </div>
      <Image
        fluid={data.banner.childImageSharp.fluid}
        alt={author.name}
        className="bio__image-journey"
      />
    </header>
  )
}

let bio = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: [, , 879, 1027],
  padding: '0 13.5px',

  '.bio__hello': {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 656,
    paddingRight: 23,
    flex: 1,
    paddingTop: 33,

    '> h3': {
      marginTop: 50,
      marginLeft: [, 61, , 71],
    },
  },

  '.bio__image-journey': {
    display: ['none !important', 'block !important'],
    borderRadius: 4,
    width: 348,
  },

  '.bio__content-card': {
    marginTop: 50,
  },
}

let sx = {
  text: {
    marginTop: 37,
    display: 'block',
    fontSize: 3,
  },
}
export { Bio }
