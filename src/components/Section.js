import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { rhythm, scale } from '../utils/typography'
import styled, { css } from 'react-emotion'
import { MeVar } from './Variable'
import theme from '../utils/theme'

const Section = props => {
  const sectionClass = cx('section', { [props.className]: props.className })
  return (
    <section
      id={props.id}
      className={sectionClass}
      data-assignment={props.assignment}
    >
      <header className="assignment variable">
        <MeVar className="variable__name" />
        <span className="assignment__key" data-assignment={props.assignment}>
          {props.section || 'section'}
        </span>
      </header>
      <div className="section--bg">
        <div className="section__content">{props.children}</div>
      </div>
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  section: PropTypes.string,
  name: PropTypes.string,
  assignment: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
}

export default Section
