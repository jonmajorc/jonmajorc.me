// Modules
import React from 'react'
import Handle from './Handle'

import Github from '!svg-react-loader!../assets/social/social_github.svg'
import Instagram from '!svg-react-loader!../assets/social/social_instagram.svg'
import LinkedIn from '!svg-react-loader!../assets/social/social_linkedIn.svg'
import Twitter from '!svg-react-loader!../assets/social/social_twitter.svg'

const CallingCard = () => {
  return (
    <>
      <Handle className="CallingCard__Handle" />
      <small className="CallingCard__email">hey@jonmajorc.me</small>
      <ul className="CallingCard__social">
        <li className="CallingCard__social__icon">
          <a
            href="https://github.com/jonmajorc"
            alt="Github icon"
            aria-label="Github"
            target="_blank"
          >
            <Github />
          </a>
        </li>
        <li className="CallingCard__social__icon">
          <a
            href="https://www.instagram.com/jonmajorc"
            alt="Instagram icon"
            aria-label="Instagram"
            target="_blank"
          >
            <Instagram />
          </a>
        </li>
        <li className="CallingCard__social__icon">
          <a
            href="https://www.linkedin.com/in/jonmajorc"
            alt="LinkedIn icon"
            aria-label="LinkedIn"
            target="_blank"
          >
            <LinkedIn />
          </a>
        </li>
        <li className="CallingCard__social__icon">
          <a
            href="https://twitter.com/jonmajorc"
            alt="Twitter icon"
            aria-label="Twitter"
            target="_blank"
          >
            <Twitter />
          </a>
        </li>
      </ul>
    </>
  )
}

const CallingCardHeader = () => (
  <header className="CallingCard">
    <CallingCard />
  </header>
)
const CallingCardFooter = () => (
  <footer className="CallingCard">
    <CallingCard />
  </footer>
)

export { CallingCardHeader, CallingCardFooter }
