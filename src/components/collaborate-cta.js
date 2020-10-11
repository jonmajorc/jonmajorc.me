/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx, Styled } from 'theme-ui'

/***************************************************************************\
 components
 \***************************************************************************/
import { Button } from './button'
import { mq } from '../gatsby-plugin-theme-ui'

const CollaborateCTA = ({ className, ...props }) => {
  return (
    <div sx={sx.container} className={className}>
      <div sx={sx.leatherPinStripe}>
        <div sx={sx.left}>
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
    maxWidth: 1024,
  },
  leatherPinStripe: {
    border: 'leatherPinStripe',
    borderRadius: 5,
    display: 'flex',
    flexWrap: 'wrap',
    padding: [20, 20, '31px 102px 23px 63px'],
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
  left: {
    [mq[1]]: {
      flex: 1,
    },
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: '15px auto',

    [mq[1]]: { paddingLeft: 50 },
    [mq[2]]: { paddingLeft: 178 },
  },
}

export { CollaborateCTA }
