/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx, Styled, P } from 'theme-ui'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

const Div = (props) => <div {...props} />

const FeaturedBlog = ({ className, ...props }) => {
  let Container = props.to ? Link : Div

  return (
    <Container
      to={props.to}
      sx={{
        ...sx.container,
        transition: 'zoom',

        ':hover': {
          transform: 'scale(1.05)',
          boxShadow: 'shadowHover',
        },
      }}
      className={className}
    >
      <Image minWidth="140px" fluid={props.image} />
      <div sx={{ ...sx.excerpt, height: props.bannerCredit && 115 }}>
        <Styled.h5 sx={sx.title} className="bold">
          {props.title}
        </Styled.h5>
        <span sx={sx.date}>{props.date}</span>
        <span sx={sx.text}>{props.bannerCredit || props.excerpt}</span>
      </div>
    </Container>
  )
}

let sx = {
  container: {
    position: 'relative',
    display: 'block',
    width: [720],
    height: [420],
    borderRadius: 10,
    backgroundColor: 'b',
    margin: '0 auto',
    overflow: 'hidden',
  },
  excerpt: {
    height: 154,
    position: 'absolute',
    background:
      'linear-gradient(293.44deg, rgba(73, 77, 75, 0.69) 38.65%, rgba(73, 77, 75, 0) 88.5%);',
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'right',
    padding: '22px 42px 22px 218px',
  },
  title: {
    color: 'w',
  },
  date: {
    color: 'beige',
  },
  text: {
    display: 'block',
    color: 'w',
    fontSize: [1],
    lineHeight: 1.5,
    marginTop: 10,
  },
}

export { FeaturedBlog }
