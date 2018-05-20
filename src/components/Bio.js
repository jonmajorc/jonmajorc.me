import React from 'react'
import { css } from 'react-emotion'

// components
import Section from './Section'

// Import typefaces
import { rhythm } from '../utils/typography'

const working = css`
  .content {
    display: flex;
    justify-content: center;
  }

  .img--background {
    img {
      margin: 0;
      position: relative;
      right: -30px;
      top: -5px;
    }
    background: pink;
    padding: 20px;
  }
`
class Bio extends React.Component {
  render() {
    return (
      <Section className={working} id="working" section="working">
        <div className="content">
          <div className="img--background">
            <img height="250px" src="./working.JPG" alt="Major hard at work" />
          </div>
        </div>
      </Section>
    )
  }
}

export default Bio
