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
        <span sx={sx.unavailable}>coding</span>
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
    textDecoration: 'line-through',
    color: 'disabled',
  },
}

export { ServiceAvailability }
