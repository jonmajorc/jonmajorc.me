import React from 'react'
import Link from 'gatsby-link'

class Note extends React.Component {
  render() {
    const { node, title } = this.props
    return (
      <Link key={node.fields.slug} className="note" to={node.fields.slug}>
        <h4>{title}</h4>
        <small>{node.frontmatter.date}</small>
        <i dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </Link>
    )
  }
}

export default Note
