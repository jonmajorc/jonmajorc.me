import React from 'react'
import get from 'lodash/get'
import Note from './Note'

// components
import Section from './Section'

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
          if (!list.length) {
            return <div>Soon...</div>
          }

          return (
            <div className="content">
              {list.map(({ node }) => {
                let title = get(node, 'frontmatter.title') || node.fields.slug
                return <Note key={node.fields.slug} title={title} node={node} />
              })}
            </div>
          )
        }}
      </Section>
    )
  }
}

export default Notes
