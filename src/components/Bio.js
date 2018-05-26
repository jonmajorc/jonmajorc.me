import React, { Fragment } from 'react'

// components
import Section from './Section'
import Quote from './Quote'

class Bio extends React.Component {
  render() {
    return (
      <Section className="bio" id="bio" section="bio">
        <Fragment>
          <div className="bio content">
            <p className="bio__excerpt">This is me, Jon Major, working hard.</p>
            <div className="bio__img--background">
              <img
                className="bio__img"
                height="250px"
                src="./working.JPG"
                alt="Major hard at work"
              />
            </div>
          </div>
          <Quote />
        </Fragment>
      </Section>
    )
  }
}

export default Bio
