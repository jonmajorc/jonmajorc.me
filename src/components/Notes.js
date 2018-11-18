import React from 'react'
import get from 'lodash/get'
import Note from './Note'

// components
import Section from './Section'
import { StaticQuery, graphql } from 'gatsby'

class Notes extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query NotesQuery {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
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
        `}
        render={data => (
          <Section
            className="notes"
            id="notes"
            section="notes"
            opening="["
            closing="]"
            limit={3}
            data={data.allMarkdownRemark.edges}
          >
            {({ list }) => {
              if (!list.length) {
                return <div>Soon...</div>
              }

              return (
                <div className="content">
                  {list.map(({ node }) => {
                    let title =
                      get(node, 'frontmatter.title') || node.fields.slug
                    return (
                      <Note key={node.fields.slug} title={title} node={node} />
                    )
                  })}
                </div>
              )
            }}
          </Section>
        )}
      />
    )
  }
}

export default Notes
