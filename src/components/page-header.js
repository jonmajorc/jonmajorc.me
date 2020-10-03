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
      <Image fluid={props.image} alt={props.alt} sx={sx.image} />
    </header>
  )
}

let sx = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: [, , 879, 1027],
    padding: '0 13.5px',
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
    display: ['none !important', 'block !important'],
    borderRadius: 4,
    width: 348,
  },
  text: {
    marginTop: 37,
    display: 'block',
    fontSize: 3,
  },
}

export { PageHeader }
