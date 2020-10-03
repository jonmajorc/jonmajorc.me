/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx, Styled } from 'theme-ui'

/***************************************************************************\
  assets
\***************************************************************************/

import Instagram from '../images/instagram_black.inline.svg'

const InstagramCard = ({ className, ...props }) => {
  return (
    <div sx={sx.container} className={className}>
      <span sx={sx.text}>{props.title} </span>
      <div sx={sx.imgPreview}>
        {props.images.map((content) => {
          return <img src={content.img} alt={content.alt} sx={sx.image} />
        })}
      </div>
      <a href={`https://instagram.com${props.link}`} sx={sx.igLink}>
        <Instagram />
        <span>{props.link}</span>
      </a>
    </div>
  )
}

let sx = {
  container: {
    width: 516,
    height: 295,
    borderRadius: 10,
    backgroundColor: 'b',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  text: {
    color: 'beige',
    marginLeft: 35,
    fontFamily: 'heading',
    fontSize: [1],
  },
  imgPreview: {
    height: 178,
    width: '100%',
    display: 'flex',
  },
  image: {
    width: 172,
    objectFit: 'cover',
  },
  igLink: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 35,
    textDecoration: 'none',

    path: {
      fill: 'beige',
    },

    span: {
      marginLeft: '8px',
      color: 'beige',
    },
  },
}

export { InstagramCard }
