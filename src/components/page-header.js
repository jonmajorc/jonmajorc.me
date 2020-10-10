/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx, Styled } from 'theme-ui'

/***************************************************************************\
  components
\***************************************************************************/
import Image from 'gatsby-image'

const PageHeader = (props) => {
  return (
    <header sx={sx.container} className={props.className}>
      <div sx={sx.textLeft}>
        {props.header}
        <span sx={sx.text}>{props.text}</span>
      </div>
      {props.image.src && (
        <Image
          fluid={props.image.src}
          alt={props.alt}
          sx={{ ...sx.image, ...props.image.sx }}
          className={props.image.className}
        />
      )}
    </header>
  )
}

let sx = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: [, , 879, 1024],
  },
  textLeft: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 656,
    paddingRight: 23,
    flex: 1,
    paddingTop: 33,

    '> h3': {
      marginTop: 50,
      marginLeft: [, 61, , 71],
    },
  },
  image: {
    borderRadius: 4,
    width: [248, 248, 248, 348],
    margin: '0 auto',

    '&.full-width-banner': {
      position: 'absolute !important',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: -1,
      height: 450,
      borderRadius: 0,
    },
  },
  text: {
    marginTop: 37,
    display: 'block',
    fontSize: [1, 1, 2, 3],
  },
}

export { PageHeader }
