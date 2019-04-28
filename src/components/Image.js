import React from 'react'
import cx from 'classnames'
import Img from 'gatsby-image'

const Image = props => {
  return (
    <div
      className={cx('Image', props.className)}
      data-rotate={props.rotate || '0deg'}
    >
      <Img fluid={props.fluidSrc} alt={props.alt} />
    </div>
  )
}

export default Image
