import React from 'React'

const NoContent = props => {
  return (
    <span
      style={{
        backgroundColor: 'white',
        padding: '10px 15px',
        borderRadius: '10px',
      }}
    >
      {props.blurb}
    </span>
  )
}

export default NoContent
