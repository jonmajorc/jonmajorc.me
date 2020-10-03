/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

const ContentCard = ({ className, ...props }) => {
  return (
    <div
      sx={{
        ...sx.container,
        flexDirection: props.reverse ? 'row-reverse' : 'row',
      }}
      className={className}
    >
      <div
        sx={{
          paddingRight: !props.reverse && 105,
          paddingLeft: props.reverse && 105,
        }}
      >
        <Styled.h3 className="bold">{props.header}</Styled.h3>
        <span sx={sx.text}>
          Nam eu mollis sem. Nullam eleifend nulla molestie mauris aliquam
          tincidunt. Praesent ex tortor, mollis eu enim in, elementum pulvinar
          leo. Suspendisse sit amet neque libero. Mauris sit amet ligula vitae
          sem molestie tempor id eget nisi. Nam dignissim malesuada est eget
          commodo.
        </span>
      </div>
      <img sx={sx.image} src={props.img} alt={props.alt} />
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
    width: [348],
    height: [331],
    objectFit: 'cover',
    borderRadius: 10,
    boxShadow: '0 4px 4px 2px #C9C9C9',
  },
}

export { ContentCard }
