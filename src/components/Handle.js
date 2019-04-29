import React from 'react'
import { Underline__Temp } from './Underline'
import { Link } from 'gatsby'

const Handle = () => {
  return (
    <Link className="Handle" to="/" activeClassName="active">
      <span className="bold">&#123;@jonmajorc&#93;</span>
      <Underline__Temp className="Handle__Underline" />
    </Link>
  )
}

export default Handle
