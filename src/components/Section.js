import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { rhythm, scale } from '../utils/typography'
import styled, { css } from 'react-emotion'
import { MeVar } from './Variable'
import theme from '../utils/theme'

const Section = props => {
  /***************************************************************************\
    styling
  \***************************************************************************/
  const section = css`
    background-color: ${theme.beige};
    position: relative;
    min-height: 200px;

    .object__var {
      font-size: ${rhythm(1.5)};
    }

    .section__content {
      padding: 50px 25px;
    }

    :after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 5px;
      font-size: ${rhythm(1.5)};
      color: ${theme.grey};
    }

    ${() => {
      if (props.assignment === 'array') {
        return `:after {
          content: '\\005d';
        }`
      } else if (props.assignment === 'object') {
        return `:after {
          content: '\\007d';
        }`
      }
    }};

    .object {
      position: absolute;
      left: -60px;

      &__key {
        font-size: ${rhythm(1.5)};
        color: ${theme.grey};

        :before {
          content: '.';
        }

        ${() => {
          if (props.assignment === 'array') {
            return `:after {
              content: ' = \\005b';
            }`
          } else if (props.assignment === 'object') {
            return `:after {
              content: ' = \\007b';
              `
          } else {
            return `:after {
              content: ' = ';
            }`
          }
        }};
      }
    }
  `

  return (
    <section id={props.id} className={`${section} ${props.className}`}>
      <div className="object">
        <MeVar className="object__var" noSemi={true} />
        <span className="object__key">{props.section || 'section'}</span>
      </div>
      <div className="section__content">{props.children}</div>
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
