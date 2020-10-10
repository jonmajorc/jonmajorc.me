/** @jsx jsx */
import { jsx } from 'theme-ui'
// import React from 'react'
import Instagram from '../images/instagram_outline_black.inline.svg'
import Twitter from '../images/twitter_outline_black.inline.svg'
import Github from '../images/github_outline_black.inline.svg'
import Youtube from '../images/youtube_outline_black.inline.svg'
import Patreon from '../images/patreon_outline_black.inline.svg'

// TODO (JMC) Replace social links

// const useSizing = ({ setProperty, defaultValue }) => {
//   document.body.style.setProperty(setProperty, defaultValue)

//   let resizeEffect = (e) => {
//     document.body.style.setProperty(
//       setProperty,
//       8  - e.target.outerWidth * 0.001
//     )
//   }

//   React.useEffect(() => {
//     window.addEventListener('resize', resizeEffect)

//     return () => window.removeEventListener('resize', resizeEffect)
//   }, [])
// }

const Divider = ({ className, ...props }) => {
  // useSizing({
  //   setProperty: '--resize-social-icons',
  //   defaultValue: 4,
  // })

  return (
    <div sx={sx.container} className={className}>
      <hr sx={sx.dividerLine} className="divider-line--left" />
      <div sx={sx.icons}>
        <a href="#">
          <Instagram sx={sx.icon} />
        </a>
        <a href="#">
          <Twitter sx={sx.icon} />
        </a>
        <a href="#">
          <Github sx={sx.icon} />
        </a>
        <a href="#">
          <Youtube sx={sx.icon} />
        </a>
        <a href="#">
          <Patreon sx={sx.icon} />
        </a>
      </div>
      <hr sx={sx.dividerLine} className="divider-line--right" />
    </div>
  )
}

let sx = {
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'w',
    position: 'absolute',
    left: 0,
    width: '100%',
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
  },

  dividerLine: {
    borderTop: (theme) => `2px dashed ${theme.colors.lightBlack}`,

    '&.divider-line--left': {
      flex: [1, 4],

      '@media (min-width: 2000px)': {
        flex: 2,
      },
    },
    '&.divider-line--right': {
      flex: 1,
    },
  },
}

export { Divider }
