import React from 'react'
import Squiggly from '!svg-react-loader!../assets/red-squiggly.svg'
import cx from 'classnames'
import PropTypes from 'prop-types'

export const Underline__Temp = ({ Underline, viewBox, className }) => {
  return (
    <div className={cx('Underline', className)}>
      {<Squiggly viewBox={viewBox} />}
    </div>
  )
}

Underline__Temp.propTypes = {
  className: PropTypes.oneOf(['Blog-l__Underline', 'Handle__Underline']),
}

const Underline = ({ squiggly }) => {
  return (
    <div className="Underline">
      {new Array(squiggly)
        .fill('')
        .reduce(
          acc => {
            const left = acc.left + -2
            return {
              ...acc,
              left,
              els: [
                ...acc.els,
                <Squiggly
                  style={{ position: 'relative', left: left + 'px' }}
                />,
              ],
            }
          },
          { left: 0 }
        )
        .els.map(ele => ele)}
    </div>
  )
}

Underline.propTypes = {
  className: PropTypes.oneOf(['Blog-l__Underline']),
}

export default Underline
