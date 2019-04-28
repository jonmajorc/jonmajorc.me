import React from 'react'
import Squiggly from '!svg-react-loader!../assets/squiggly.svg'

const Underline = ({ squiggly }) => {
  return (
    <div style={{ display: 'flex' }}>
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

export default Underline
