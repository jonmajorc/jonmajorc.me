/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx } from 'theme-ui'
import { keyframes } from 'emotion'
import theme from '../gatsby-plugin-theme-ui'

const ServiceAvailability = ({ className, ...props }) => {
  return (
    <div sx={sx.container} className={className}>
      <div sx={sx.dot} />
      <i sx={sx.services}>
        Available for filmmaking / photography /{' '}
        <span sx={sx.unavailable}>
          coding
          <div className="tooltip">
            I don't do any coding for folks on the side, but you can find me and
            other awesome developers here:{' '}
            <a href="http://infinite.red/">Infinite Red</a>
          </div>
        </span>
      </i>
    </div>
  )
}

let pulse = keyframes({
  from: {
    boxShadow: `0 0 15px 0 ${theme.colors.teal}`,
  },
  to: {
    boxShadow: `0 0 0 0 ${theme.colors.teal}`,
  },
})

let sx = {
  container: {
    display: 'flex',
    alignItems: 'center',
    '*': {
      fontSize: 0,
    },
  },
  dot: {
    animation: `${pulse} 2s infinite`,
    height: 12,
    width: 12,
    backgroundColor: 'teal',
    borderRadius: '50%',
    marginRight: 12,
  },
  services: {},
  unavailable: {
    cursor: 'help',
    textDecoration: 'line-through',
    color: 'disabled',
    position: 'relative',

    '&:hover .tooltip': {
      visibility: 'visible',
    },

    '.tooltip': {
      color: 'text',
      padding: 10,
      visibility: 'hidden',
      boxShadow: 'shadow1',
      width: '220px',
      backgroundColor: 'w',
      textAlign: 'center',
      borderRadius: '6px',

      /* Position the tooltip */
      position: 'absolute',
      zIndex: '1',
      bottom: '100%',
      left: '50%',
      marginLeft: '-80px',
    },
  },
}

export { ServiceAvailability }
