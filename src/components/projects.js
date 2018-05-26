import React from 'react'

// components
import Section from './Section'
import Quote from './Quote'

class Projects extends React.Component {
  render() {
    return (
      <Section
        className="projects"
        id="projects"
        section="projects"
        assignment="array"
      >
        <div className="content coming-soon">
          <p>(comming soon)</p>
        </div>
      </Section>
    )
  }
}

export default Projects
