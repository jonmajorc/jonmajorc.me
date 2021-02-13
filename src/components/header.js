/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

/***************************************************************************\
  assets
\***************************************************************************/
import Instagram from '../images/instagram_outline_black.inline.svg'
import Twitter from '../images/twitter_outline_black.inline.svg'
import Github from '../images/github_outline_black.inline.svg'
import Youtube from '../images/youtube_outline_black.inline.svg'

const Header = ({ location }) => {
  let jonmajorc = useStaticQuery(graphql`
    query ImageQuery {
      banner: file(absolutePath: { regex: "/jonmajorc.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 62, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <header sx={sx.header}>
      <div sx={sx.border}>
        <Img
          sx={sx.logo}
          fluid={jonmajorc.banner.childImageSharp.fluid}
          alt="Jon Major C taking sick pics"
        />
      </div>
      <div sx={sx.icons}>
        <a href="https://www.instagram.com/jonmajorc/" target="_blank">
          <Instagram sx={sx.icon} />
        </a>
        <a
          href="https://twitter.com/intent/user?screen_name=jonmajorc"
          target="_blank"
        >
          <Twitter sx={sx.icon} />
        </a>
        <a href="https://github.com/jonmajorc" target="_blank">
          <Github sx={sx.icon} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCQB-QsEnKCvJX4e_ms9XvHA?sub_confirmation=1"
          target="_blank"
        >
          <Youtube sx={sx.icon} />
        </a>
      </div>
    </header>
  )
}

let sx = {
  header: {
    position: 'relative',
    maxWidth: 1200,
    width: 1200,
    height: 70,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 20,
    padding: '0 50px',
  },
  border: {
    backgroundColor: 'w',
    borderRadius: '50%',
    border: 'borderBlack1px',
    boxShadow: 'shadow2',
    userSelect: 'none',
    padding: '5px',
  },
  logo: {
    width: 62,
    height: 62,
    borderRadius: '50%',
    padding: '9px',

    path: {
      fill: 'b',
    },
  },
  icons: {
    '> a:first-of-type': {
      marginLeft: 35,
    },

    '> a': {
      marginRight: 24,
    },

    '> a:last-of-type': {
      marginRight: 35,
    },
  },
  icon: {
    width: [25, 25, 31],

    ':hover': {
      transition: 'all 150ms cubic-bezier(0.74, 0.01, 0.32, 0.68)',
      transform: 'scale(1.2)',

      path: {
        fill: 'darkOrange',
      },
    },
  },
}

export { Header }
