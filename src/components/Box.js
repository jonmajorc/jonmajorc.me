import React from 'react'
import Underline from './Underline'
import cx from 'classnames'
import { Link } from 'gatsby'

const Box = ({ children, ...props }) => {
  return (
    <section className={cx('Box', props.className)}>
      <header className="Box__header">
        {props.header && props.link ? (
          <Link to={props.link}>
            <h2>{props.header}</h2>
            {props.squigglyForHeader__temp}
            {/* <Underline squiggly={props.squigglyForHeader} /> */}
          </Link>
        ) : (
          props.header && <h2>{props.header}</h2>
        )}
        {props.subHeader && (
          <h2 className="sub-header">// {props.subHeader}</h2>
        )}
      </header>
      <div className="Box__content">{children}</div>
    </section>
  )
}

export default Box
