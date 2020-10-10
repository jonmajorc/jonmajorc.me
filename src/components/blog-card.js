/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const BlogCard = ({ className, ...props }) => {
  return (
    <Link sx={sx.container} className={className} to={props.to}>
      <Image sx={sx.image} fluid={props.image}></Image>
      <div sx={sx.content}>
        <Styled.h5 className="bold">{props.title}</Styled.h5>
        <Styled.p>{props.excerpt}</Styled.p>
      </div>
    </Link>
  )
}

let sx = {
  container: {
    maxWidth: 720,
    maxHeight: [, 140],
    boxShadow: '2px 3px 4px 3px rgba(0, 0, 0, 0.1);',
    borderRadius: 10,
    overflow: 'hidden',
    display: 'flex',
    cursor: 'pointer',
    transition: 'zoom',
    textDecoration: 'none',
    color: 'b',

    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: 'shadowHover',
    },
  },
  image: {
    minWidth: 140,
  },
  content: {
    margin: 25,
    whiteSpace: 'pre-wrap',
  },
}

export { BlogCard }
