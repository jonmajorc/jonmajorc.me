import React from 'react'
import styled, { css } from 'react-emotion'
import { rhythm, scale } from '../utils/typography'
import PropTypes from 'prop-types'

/***************************************************************************\
  styling
\***************************************************************************/

const ObjAssignment = styled.p`
  color: ${props => props.theme.lightBlue};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${rhythm(1)};
  .section-name {
    font-size: ${rhythm(0.9)};
    color: ${props => props.theme.grey};

    :after {
      content: ' = ';
    }
  }
`

export const LetStyl = styled.span`
  font-weight: bold;
  font-size: ${rhythm(1)};
  color: purple;
`

export const VarStyl = styled.span`
  font-weight: bold;
  font-size: ${rhythm(1)};
  text-transform: uppercase;
  color: ${props => props.theme.lightBlue};

  ${props =>
    !props.noSemi &&
    `&:after {
      content: ' ;';
      color: ${props.theme.black};
    }`};
`
/***************************************************************************\
  components
\***************************************************************************/
export const LetVar = () => (
  <span>
    <LetStyl>let&nbsp;</LetStyl>
    <VarStyl noSemi={false}>Jm</VarStyl>
  </span>
)

export const Let = () => <LetStyl>let</LetStyl>

export const MeVar = props => (
  <VarStyl className={props.className} noSemi={props.noSemi}>
    JM
  </VarStyl>
)

MeVar.propTypes = {
  noSemi: PropTypes.bool,
  className: PropTypes.string,
}

export const ObjAssign = props => (
  <ObjAssignment className={props.className}>
    Me.<span className="section-name">{props.section || 'section'}</span>
  </ObjAssignment>
)

ObjAssign.propTypes = {
  section: PropTypes.string,
  className: PropTypes.string,
}
