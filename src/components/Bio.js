import React, { Fragment } from 'react'

// components
import Section from './Section'

class Bio extends React.Component {
  render() {
    return (
      <Section className="bio" id="bio" section="bio">
        <Fragment>
          <div className="bio content">
            <p className="bio__excerpt">
              Hey! I am Jon Major, <a href="#contact">and you are?</a>
            </p>
            <div className="bio__img--background">
              <img
                className="bio__img"
                width="250px"
                src="./jonmajor.JPG"
                alt="Major hard at work"
              />
            </div>
          </div>
        </Fragment>
      </Section>
    )
  }
}

export default Bio
