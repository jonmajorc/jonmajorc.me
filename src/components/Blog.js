import React from 'react'
import Box from './Box'
import Blurb from './Blurb'
import { useStaticQuery, graphql } from 'gatsby'
import Note from './Note'
import { Underline__Temp } from './Underline'

const Blog = () => {
  const blogs = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD MMMM, YYYY")
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Box
      className="Blog"
      header="Blogs"
      link="/blogs"
      squigglyForHeader__temp={<Underline__Temp className="Blog__Underline" />}
      subHeader="Latest blogs..."
    >
      {blogs.allMarkdownRemark.edges.map(({ node }) => {
        let title = node.frontmatter.title
        return <Note key={node.fields.slug} title={title} node={node} />
      })}
      <Blurb className="Blog__Blurb" author="Todd Henry">
        If you make things and share them, your heart will at some point be
        broken. If you never share, it will harden. Your choice.
      </Blurb>
    </Box>
  )
}

export default Blog
