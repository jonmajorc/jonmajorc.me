import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Button = ({ children, className, color, ...props }) => {
  return (
    <button className={cx('Button', className)} data-color="red" {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.oneOf([]),
}

export default Button
