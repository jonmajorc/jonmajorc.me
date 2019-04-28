import React from 'react'
import Underline from './Underline'

const Box = ({ children, ...props }) => {
  return (
    <section className="Box">
      <header className="Box__header">
        {props.header && (
          <div>
            <h2>{props.header}</h2>
            <Underline squiggly={props.squigglyForHeader} />
          </div>
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
