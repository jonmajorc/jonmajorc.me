import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const BlogDate = props => {
  return (
    <span className={cx('BlogDate', props.classNames)}>
      {props.date || 'No date present'}
    </span>
  )
}

BlogDate.propTypes = {
  className: PropTypes.oneOf(['blog-post__header_date']),
}

export default BlogDate
