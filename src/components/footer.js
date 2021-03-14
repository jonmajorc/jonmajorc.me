/** @jsx jsx */
import { jsx } from 'theme-ui'
import Instagram from '../images/instagram_black.inline.svg'
import Twitter from '../images/twitter_black.inline.svg'
import Github from '../images/github_black.inline.svg'
import Youtube from '../images/youtube_black.inline.svg'
// import { Button } from './button

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
        <a
          sx={sx.icon}
          href="https://www.instagram.com/jonmajorc/"
          target="_blank"
        >
          <Instagram />
          Instagram
        </a>
        <a
          sx={sx.icon}
          href="https://twitter.com/intent/user?screen_name=jonmajorc"
          target="_blank"
        >
          <Twitter />
          Twitter
        </a>
        <a sx={sx.icon} href="https://github.com/jonmajorc" target="_blank">
          <Github />
          Github
        </a>
        <a
          sx={sx.icon}
          href="https://www.youtube.com/channel/UCQB-QsEnKCvJX4e_ms9XvHA?sub_confirmation=1"
          target="_blank"
        >
          <Youtube />
          YouTube
        </a>
      </div>
      {/* <div sx={sx.subscribeContainer}>
        <Styled.h4 sx={sx.subscribeTitle}>
          Subscribe to my newsletter!
        </Styled.h4>
        <input placeholder="your email" type="email" sx={sx.emailInput} />
        <Button sx={sx.submitContact}>Subscribe</Button>
      </div> */}
      <span sx={sx.copyright}>
        Made by Jon Major Condon © {new Date().getFullYear()}
      </span>
    </footer>
  )
}

let sx = {
  container: {
    width: '100%',
    marginTop: 128,
    paddingBottom: 50,
  },
  icons: {
    maxWidth: [350, 520, 820],
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: 14,
    flexWrap: 'wrap',
  },
  icon: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'darkRed',
    fontSize: 2,
    marginBottom: 10,

    svg: {
      width: 35,
      height: 35,
      paddingRight: 11,
      path: {
        fill: 'darkRed',
      },
    },

    ':hover': {
      transition: 'all 250ms linear',
      color: 'darkOrange',

      path: {
        transition: 'all 250ms linear',
        fill: 'darkOrange',
      },
    },
  },

  subscribeTitle: {
    display: 'block',
    marginTop: [40, 78],
    color: 'darkRed',
    fontSize: [2, 2, 3, 3],
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
    borderRadius: 0,

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
    width: 330,
    textAlign: 'center',
  },

  submitContact: {
    marginTop: 26,
  },

  copyright: {
    marginTop: 25,
    fontSize: 0,
    color: 'b',
    width: '100%',
    textAlign: 'center',
    display: 'block',
  },
}

export { Footer }
