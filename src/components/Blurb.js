import React from 'react'
import cx from 'classnames'
import quote from '../../static/quote.svg'

const Blurb = ({ children, ...props }) => {
  return (
    <blockquote className={cx('Blurb', props.className)}>
      <img className="quote__mark" src={quote} alt="quotation mark" />
      {children}
    </blockquote>
  )
}

export default Blurb
