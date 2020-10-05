/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Instagram from '../images/instagram_black.inline.svg'
import Twitter from '../images/twitter_black.inline.svg'
import Github from '../images/github_black.inline.svg'
import Youtube from '../images/youtube_black.inline.svg'
import Patreon from '../images/patreon_black.inline.svg'
import { Button } from './button'

// TODO (JMC) Replace social links
const Footer = ({ className, ...props }) => {
  return (
    <footer
      sx={{
        ...sx.container,
        ...(props.placeBottom && {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        }),
      }}
      className={className}
    >
      <div sx={sx.leatherPinStripe}></div>
      <div sx={sx.icons}>
        <a sx={sx.icon} href="#">
          <Instagram />
          Instagram
        </a>
        <a sx={sx.icon} href="#">
          <Twitter />
          Twitter
        </a>
        <a sx={sx.icon} href="#">
          <Github />
          Github
        </a>
        <a sx={sx.icon} href="#">
          <Youtube />
          YouTube
        </a>
        <a sx={sx.icon} href="#">
          <Patreon />
          Buy Me Coffee!
        </a>
      </div>
      <div sx={sx.subscribeContainer}>
        <span sx={sx.subscribeTitle}>Subscribe to my newsletter!</span>
        <input placeholder="your email" type="email" sx={sx.emailInput} />
        <Button sx={sx.submitContact}>Subscribe</Button>
      </div>
      © {new Date().getFullYear()}
    </footer>
  )
}

let sx = {
  container: {
    height: 383,
    width: '100%',
    backgroundColor: 'b',
    marginTop: 128,
  },
  leatherPinStripe: {
    borderBottom: 'leatherPinStripe',
    paddingTop: 14,
  },
  icons: {
    width: '820px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: 14,
  },
  icon: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'beige',
    fontSize: 2,

    svg: {
      width: 35,
      height: 35,
      paddingRight: 11,
      path: {
        fill: 'beige',
      },
    },
  },

  subscribeTitle: {
    display: 'block',
    marginTop: 78,
    color: 'beige',
    fontSize: [2, 2, 3, 4],
    fontWeight: 'bold',
  },

  emailInput: {
    background: 'transparent',
    border: 'none',
    borderBottom: 'inputBottom',
    color: 'w',
    textAlign: 'center',
    width: '100%',
    paddingTop: 64,
    fontSize: [2],

    ':placeholder': {
      color: '#C4C4C4',
    },

    ':focus': {
      borderBottom: 'inputBottomFocus',
      outline: 'none',
    },
  },

  subscribeContainer: {
    margin: '0 auto',
    width: 300,
    textAlign: 'center',
  },

  submitContact: {
    marginTop: 26,
  },
}

export { Footer }
