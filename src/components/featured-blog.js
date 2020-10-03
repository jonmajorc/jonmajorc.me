/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx, Styled } from 'theme-ui'

const FeaturedBlog = ({ className, ...props }) => {
  return <div sx={sx.container} className={className}></div>
}

let sx = {
  container: {
    width: [830],
    height: [553],
    borderRadius: 10,
    backgroundColor: 'b',
    margin: '0 auto ',
  },
}

export { FeaturedBlog }
