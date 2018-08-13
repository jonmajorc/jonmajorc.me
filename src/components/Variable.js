import React from 'react'
import PropTypes from 'prop-types'

/***************************************************************************\
  components
  \***************************************************************************/
export const Let = props => (
  <span className={`variable__declare ${props.className}`}>let</span>
)

Let.propTypes = {
  className: PropTypes.string,
}

export const MeVar = props => (
  <span
    className={`variable__name ${props.className}`}
    data-semi={props.semi && true}
  >
    jm
  </span>
)

MeVar.propTypes = {
  semi: PropTypes.bool,
  className: PropTypes.string,
}

export const LetVar = props => (
  <span className="variable">
    <Let />&nbsp;
    <MeVar semi={props.semi} />
  </span>
)

LetVar.propTypes = {
  semi: PropTypes.bool,
}
