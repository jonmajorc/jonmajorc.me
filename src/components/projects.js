import React from 'react'

// components
import Section from './Section'

class Projects extends React.Component {
  render() {
    return (
      <Section
        className="projects"
        id="projects"
        section="projects"
        opening="["
        closing="]"
        available={false}
      />
    )
  }
}

export default Projects
