import React from 'react'
import Box from './Box'

const Blog = () => {
  return (
    <Box
      header="Blogs"
      link="/blogs"
      squigglyForHeader={3}
      subHeader="Latest blogs..."
    >
      content
    </Box>
  )
}

export default Blog
