import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Box = ({ children, ...props }) => {
  return (
    <section className={cx('Box', props.className)}>
      <header className="Box__header">
        {props.header && props.link ? (
          <Link className="Box__header__link" to={props.link}>
            <h2>{props.header}</h2>
            {/* {props.squigglyForHeader__temp} here for temp use */}
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

Box.propTypes = {
  className: PropTypes.oneOf(['Bio', 'Blog', 'Contact']),
}

export default Box
