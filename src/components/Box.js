import React from 'react'

const Box = ({ children, ...props }) => {
  return (
    <section className="Box">
      <header className="Box__header">
        {props.header && <h2>{props.header}</h2>}
        {props.subHeader && (
          <h2 className="sub-header">// {props.subHeader}</h2>
        )}
      </header>
      <div className="Box__content">{children}</div>
    </section>
  )
}

export default Box
