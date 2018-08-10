import React from 'react'
import Section from './Section'
import { ReactComponent as Github } from '../assets/social_github.svg'
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
          <a href="#">
            <Github />
          </a>
        </li>
        <li className="social__icon">
          <a href="#">
            <Instagram />
          </a>
        </li>
        <li className="social__icon">
          <a href="#">
            <LinkedIn />
          </a>
        </li>
        <li className="social__icon">
          <a href="#">
            <Twitter />
          </a>
        </li>
      </ul>
    </Section>
  )
}
