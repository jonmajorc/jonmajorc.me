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
    <div sx={divider} className={className}>
      <hr className="divider-line divider-line--left" />
      <div className="divider-icons">
        <a href="#">
          <Instagram />
        </a>
        <a href="#">
          <Twitter />
        </a>
        <a href="#">
          <Github />
        </a>
        <a href="#">
          <Youtube />
        </a>
        <a href="#">
          <Patreon />
        </a>
      </div>
      <hr className="divider-line divider-line--right" />
    </div>
  )
}

let divider = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'w',

  '.divider-icons': {
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

  '.divider-line': {
    borderTop: (theme) => `2px dashed ${theme.colors.lightBlack}`,

    '&--left': {
      flex: 4,

      '@media (min-width: 2000px)': {
        flex: 2,
      },
    },
    '&--right': {
      flex: 1,
    },
  },
}

export { Divider }
