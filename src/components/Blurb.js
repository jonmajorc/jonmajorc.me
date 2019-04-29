import React from 'react'
import cx from 'classnames'
import quote from '../../static/quote.svg'

const Blurb = ({ children, ...props }) => {
  const blockQuoteRef = React.useRef()

  React.useEffect(() => {
    let animationCount = 0
    let completedAnimation = 0
    const blockquoteEle = blockQuoteRef.current

    const animationStart = () => {
      animationCount++
    }

    const animationEnd = () => {
      completedAnimation++
      animationCount === completedAnimation &&
        blockquoteEle.classList.remove('Blurb--animate-onload')
    }

    blockquoteEle.addEventListener('animationstart', animationStart)
    blockquoteEle.addEventListener('animationend', animationEnd)

    return () => {
      blockquoteEle.removeEventListener('animationstart', animationStart)
      blockquoteEle.removeEventListener('animationend', animationEnd)
    }
  }, [])

  return (
    <blockquote
      ref={blockQuoteRef}
      className={cx('Blurb', 'Blurb--animate-onload', props.className)}
    >
      <img className="quote__mark" src={quote} alt="quotation mark" />
      <p>{children}</p>
      {props.author && <span>~ {props.author}</span>}
    </blockquote>
  )
}

export default Blurb
