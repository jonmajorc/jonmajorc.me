/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'

import { mq } from '../gatsby-plugin-theme-ui'

const ContentCard = ({ className, ...props }) => {
  return (
    <div
      sx={{
        ...sx.container,

        [mq[2]]: {
          flexDirection: props.reverse ? 'row-reverse' : 'row',
        },
      }}
      className={className}
    >
      <div
        sx={{
          [mq[2]]: {
            paddingRight: !props.reverse && 105,
            paddingLeft: props.reverse && 105,
          },
        }}
      >
        <Styled.h3 className="bold">{props.header}</Styled.h3>
        <span sx={{ ...sx.text }}>{props.text}</span>
      </div>
      {props.images.length > 1 ? (
        <Link sx={sx.imgWrapperStyles} to="/contact">
          {props.images.map((image) => {
            return (
              <img
                key={image.alt}
                sx={sx.images}
                src={image.src}
                alt={image.alt}
              />
            )
          })}
        </Link>
      ) : (
        props.images.length === 1 && (
          <img sx={sx.image} src={props.img} alt={props.alt} />
        )
      )}
    </div>
  )
}

let sx = {
  container: {
    display: 'flex',
    flexDirection: 'column-reverse',
    maxWidth: 1024,
  },
  text: {
    marginTop: 37,
    display: 'block',
    fontSize: 3,
    lineHeight: 1.5,
    marginTop: 25,
    width: '100%',
  },
  image: {
    objectFit: 'cover',
    borderRadius: 10,
    boxShadow: '0 4px 4px 2px #C9C9C9',
    objectPosition: 'center',
    width: '100%',
    height: 231,
    marginBottom: 25,

    [mq[2]]: {
      flexDirection: 'column-reverse',
      width: 248,
      height: 231,
    },
  },
  imgWrapperStyles: {
    width: '100%',
    display: 'flex',
  },
  images: {
    objectFit: 'cover',
    boxShadow: '0 4px 4px 2px #C9C9C9',
    objectPosition: 'center',
    overflowX: 'scroll',

    [mq[2]]: {
      width: 130,
    },

    ':hover': {
      transition: 'all 150ms cubic-bezier(0.74, 0.01, 0.32, 0.68)',
      transform: 'scale(1.2)',
    },
  },
}

export { ContentCard }
