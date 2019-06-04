import React from 'react'
import { Underline__Temp } from './Underline'
import { Link } from 'gatsby'
import cx from 'classnames'
import PropTypes from 'prop-types'

const Handle = props => {
  return (
    <Link
      className={cx('Handle', props.className)}
      to="/"
      activeClassName="active"
    >
      <strong className="Handle__name">&#123;@jonmajorc&#93;</strong>
      <Underline__Temp className="Handle__Underline" />
    </Link>
  )
}

Handle.propTypes = {
  className: PropTypes.oneOf(['CallingCard__Handle']),
}

export default Handle
