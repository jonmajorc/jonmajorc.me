/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx } from 'theme-ui'
import React from 'react'

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
    maxWidth: 1024,
    flexWrap: 'wrap',
  },
  textLeft: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 502,
    flex: 1,

    '> h3': {
      marginTop: 50,
      marginLeft: [, 61, , 71],
    },
  },
  image: {
    borderRadius: 4,
    width: [248, 348],
  },
  text: {
    marginTop: 50,
    display: 'block',
    fontSize: [1, 1, 2, 3],
  },
}

export { PageHeader }
