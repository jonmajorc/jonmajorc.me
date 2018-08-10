import React from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'

// components
import Section from './Section'
import NoteCard from './NoteCard'

class Notes extends React.Component {
  render() {
    return (
      <Section
        className="notes"
        id="notes"
        section="notes"
        opening="["
        closing="]"
        limit={3}
        data={this.props.notes}
      >
        {({ list }) => {
          return (
            <div className="content">
              {list.map(({ node }) => {
                let title = get(node, 'frontmatter.title') || node.fields.slug
                return (
                  <div key={node.fields.slug} className="note">
                      <Link className="note__link" to={node.fields.slug}>
                        <h4>{title}</h4>
                        <small>{node.frontmatter.date}</small>
                        <i dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                      </Link>
                  </div>
                )
              })}
            </div>
          )
        }}
      </Section>
    )
  }
}

export default Notes
