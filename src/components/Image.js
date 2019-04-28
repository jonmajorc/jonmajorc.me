import React from 'react'
import cx from 'classnames'

const Image = props => {
  return (
    <div
      className={cx('Image', props.className)}
      data-rotate={props.rotate || '0deg'}
    >
      <img src={props.src} alt={props.alt} />
    </div>
  )
}

export default Image
