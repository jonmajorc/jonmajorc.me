import React, { Component } from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Note from '../components/Note'

export class Notes extends Component {
  render() {
    return (
      <section className="note-page">
        <Helmet title={`notes | ${this.props.siteTitle}`} />
        {this.props.notes.map(({ node }) => {
          let title = get(node, 'frontmatter.title') || node.fields.slug
          return <Note key={node.fields.slug} title={title} node={node} />
        })}
      </section>
    )
  }
}

export default Notes
