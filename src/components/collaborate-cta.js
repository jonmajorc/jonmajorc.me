/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Button } from './button'

const CollaborateCTA = ({ className, ...props }) => {
  return (
    <div sx={{ ...sx.container }} className={className}>
      <div sx={sx.leatherPinStripe}>
        <div sx={sx.left}>
          <Styled.h3 sx={sx.header}>Let's Collaborate!</Styled.h3>
          <span sx={sx.text}>
            Ut aliquet ipsum leo, sit amet tempus justo lacinia vel. Fusce
            ultrices leo justo, id faucibus est lacinia id. Phasellus eleifend
            risus et augue vehicula sodales. Suspendisse potenti. Etiam
            elementum sit amet augue vitae ornare.{' '}
          </span>
        </div>
        <div sx={sx.right}>
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
    padding: '31px 102px 23px 63px',
    display: 'flex',
  },
  header: {
    color: 'beige',
  },
  text: {
    display: 'block',
    marginTop: 12,
    fontSize: 1,
    color: 'beige',
    lineHeight: '182.5%',
  },
  left: {},
  right: {
    paddingLeft: 178,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}

export { CollaborateCTA }
