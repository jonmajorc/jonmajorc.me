import React from 'react'
import Section from './Section'
import { ReactComponent as Email } from '../assets/social_email.svg'
import { ReactComponent as Instagram } from '../assets/social_instagram.svg'
import { ReactComponent as LinkedIn } from '../assets/social_linkedIn.svg'
import { ReactComponent as Twitter } from '../assets/social_twitter.svg'

export default () => {
  return (
    <Section
      className="social"
      id="social"
      opening="["
      closing="]"
      section="social"
    >
      <ul className="content">
        <li className="social__icon">
          <Email />
        </li>
        <li className="social__icon">
          <Instagram />
        </li>
        <li className="social__icon">
          <LinkedIn />
        </li>
        <li className="social__icon">
          <Twitter />
        </li>
      </ul>
    </Section>
  )
}
