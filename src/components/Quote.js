import React from 'react'
import PropTypes from 'prop-types'
import quote from '../../static/quote.svg'
import cx from 'classnames'

const Quote = props => {
  return (
    <div className={cx('quote quote--bg', props.className)}>
      <div>
        <img className="quote__mark" src={quote} alt="" />
        <blockquote className="quote__text">{props.quote}</blockquote>
      </div>
    </div>
  )
}

Quote.propTypes = {
  quote: PropTypes.string,
  className: PropTypes.string,
}

export default Quote
