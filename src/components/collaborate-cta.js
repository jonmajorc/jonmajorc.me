/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx, Styled } from 'theme-ui'
import { useMedia } from 'react-media'

/***************************************************************************\
 components
 \***************************************************************************/
import { Button } from './button'
import { GLOBAL_MEDIA_QUERIES } from '../gatsby-plugin-theme-ui'

const CollaborateCTA = ({ className, ...props }) => {
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES })
  return (
    <div sx={{ ...sx.container }} className={className}>
      <div
        sx={{
          ...sx.leatherPinStripe,
          ...(matches.small && { padding: 20 }),
          ...(matches.medium && { padding: 20 }),
          ...(matches.large && { padding: '31px 102px 23px 63px' }),
        }}
      >
        <div
          sx={{
            ...(matches.medium && { flex: 1 }),
          }}
        >
          <Styled.h3 className="bold" sx={sx.header}>
            Let's Collaborate!
          </Styled.h3>
          <span sx={sx.text}>
            Ut aliquet ipsum leo, sit amet tempus justo lacinia vel. Fusce
            ultrices leo justo, id faucibus est lacinia id. Phasellus eleifend
            risus et augue vehicula sodales. Suspendisse potenti. Etiam
            elementum sit amet augue vitae ornare.{' '}
          </span>
        </div>
        <div
          sx={{
            ...sx.right,
            ...(matches.medium && { paddingLeft: 50 }),
            ...(matches.large && { paddingLeft: 178 }),
          }}
        >
          <Button>contact</Button>
        </div>
      </div>
    </div>
  )
}

let sx = {
  container: {
    backgroundColor: 'b',
    borderRadius: 10,
    padding: 11,
  },
  leatherPinStripe: {
    border: 'leatherPinStripe',
    borderRadius: 5,
    display: 'flex',
    flexWrap: 'wrap',
  },
  header: {
    color: 'beige',
  },
  text: {
    display: 'block',
    marginTop: 12,
    fontSize: 1,
    color: 'w',
    lineHeight: '182.5%',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: '15px auto',
  },
}

export { CollaborateCTA }
