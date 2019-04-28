import React from 'react'
import cx from 'classnames'
import quote from '../../static/quote.svg'

const Blurb = ({ children, ...props }) => {
  const blockQuoteRef = React.useRef()

  React.useEffect(() => {
    let animationCount = 0
    const blockquoteEle = blockQuoteRef.current
    blockquoteEle.addEventListener('animationend', () => {
      animationCount++
      console.log(
        animationCount === 3 &&
          blockquoteEle.classList.remove('Blurb--animate-onload')
      )
    })
  }, [])

  return (
    <blockquote
      ref={blockQuoteRef}
      className={cx('Blurb', 'Blurb--animate-onload', props.className)}
    >
      <img className="quote__mark" src={quote} alt="quotation mark" />
      <p>{children}</p>
    </blockquote>
  )
}

export default Blurb
