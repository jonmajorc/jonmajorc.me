import React, { Component } from 'react'
import get from 'lodash/get'
import { navigateTo } from 'gatsby-link'
export class Notes extends Component {
  render() {
    return (
      <section className="note-page">
        {this.props.notes.map(({ node }) => {
          let title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div
              key={node.fields.slug}
              onClick={() => navigateTo(node.fields.slug)}
              className="note"
            >
              <small>{node.frontmatter.date}</small>
              <h4>{title}</h4>
              <i dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </section>
    )
  }
}

export default Notes
