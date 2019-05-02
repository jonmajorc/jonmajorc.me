import React from 'react'
import { Link } from 'gatsby'

const Note = props => {
  return (
    <Link
      className="Note"
      key={props.node.fields.slug}
      to={props.node.fields.slug}
    >
      <h4>{props.title}</h4>
      <small>{props.node.frontmatter.date}</small>
      <br />
      <span dangerouslySetInnerHTML={{ __html: props.node.excerpt }} />
    </Link>
  )
}

export default Note
