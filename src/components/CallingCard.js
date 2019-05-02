// Modules
import React from 'react'
import Handle from './Handle'

import Github from '!svg-react-loader!../assets/social/social_github.svg'
import Instagram from '!svg-react-loader!../assets/social/social_instagram.svg'
import LinkedIn from '!svg-react-loader!../assets/social/social_linkedIn.svg'
import Twitter from '!svg-react-loader!../assets/social/social_twitter.svg'

const CallingCard = () => {
  return (
    <header className="CallingCard">
      <Handle />
      <small>hey@jonmajorc.com</small>
      <ul className="CallingCard__social">
        <li className="CallingCard__social__icon">
          <a href="https://github.com/jonmajorc">
            <Github />
          </a>
        </li>
        <li className="CallingCard__social__icon">
          <a href="https://www.instagram.com/jonmajorc">
            <Instagram />
          </a>
        </li>
        <li className="CallingCard__social__icon">
          <a href="https://www.linkedin.com/in/jonmajorc">
            <LinkedIn />
          </a>
        </li>
        <li className="CallingCard__social__icon">
          <a href="https://twitter.com/jonmajorc">
            <Twitter />
          </a>
        </li>
      </ul>
    </header>
  )
}

export default CallingCard
