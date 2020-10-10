/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx, Styled } from 'theme-ui'
import { useMedia } from 'react-media'

/***************************************************************************\
  components
\***************************************************************************/
import { GLOBAL_MEDIA_QUERIES } from '../gatsby-plugin-theme-ui'

const ContentCard = ({ className, ...props }) => {
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES })
  return (
    <div
      sx={{
        ...sx.container,

        ...(matches.small && { flexDirection: 'column-reverse' }),
        ...(matches.medium && { flexDirection: 'column-reverse' }),
        ...(matches.large && {
          flexDirection: props.reverse ? 'row-reverse' : 'row',
        }),
      }}
      className={className}
    >
      <div
        sx={{
          ...(matches.large && {
            paddingRight: !props.reverse && 105,
            paddingLeft: props.reverse && 105,
          }),
        }}
      >
        <Styled.h3 className="bold">{props.header}</Styled.h3>
        <span sx={{ ...sx.text, marginTop: matches.medium && 25 }}>
          Nam eu mollis sem. Nullam eleifend nulla molestie mauris aliquam
          tincidunt. Praesent ex tortor, mollis eu enim in, elementum pulvinar
          leo. Suspendisse sit amet neque libero. Mauris sit amet ligula vitae
          sem molestie tempor id eget nisi. Nam dignissim malesuada est eget
          commodo.
        </span>
      </div>
      <img
        sx={{
          ...sx.image,

          ...((matches.small || matches.medium) && {
            objectPosition: 'column-reverse',
            objectPosition: 'center',
            width: '100%',
            height: 231,
            marginBottom: 25,
          }),
          ...(matches.large && {
            flexDirection: 'column-reverse',
            width: 248,
            height: 231,
          }),
        }}
        src={props.img}
        alt={props.alt}
      />
    </div>
  )
}

let sx = {
  container: {
    display: 'flex',
  },
  text: {
    marginTop: 37,
    display: 'block',
    fontSize: 3,
    lineHeight: 1.5,
  },
  image: {
    objectFit: 'cover',
    borderRadius: 10,
    boxShadow: '0 4px 4px 2px #C9C9C9',
  },
}

export { ContentCard }
