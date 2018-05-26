import React from 'react'
import PropTypes from 'prop-types'
import quote from '../../static/quote.svg'

const Quote = props => {
  return (
    <div className="quote quote--bg">
      <div>
        <img className="quote__mark" src={quote} alt="" />
        <blockquote className="quote__text">
          One time I fought a velociraptor over a sandwich...
        </blockquote>
      </div>
    </div>
  )
}

Quote.propTypes = {
  quote: PropTypes.string,
}

export default Quote
