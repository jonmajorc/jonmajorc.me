import React from 'react'

// components
import Section from './Section'
import Quote from './Quote'
import NoteCard from './NoteCard'

const PROJECTS = []

class Projects extends React.Component {
  render() {
    return (
      <Section
        className="projects"
        id="projects"
        section="projects"
        opening="["
        closing="]"
        limit={5}
        available={false}
        data={PROJECTS}
      >
        {({ list }) => {
          return (
            <div className="content">
              {list.map(item => {
                return (
                  <div key={item.id} className="note">
                    <NoteCard>{item.project}</NoteCard>
                    <span className="note__text" />
                  </div>
                )
              })}
            </div>
          )
        }}
      </Section>
    )
  }
}

export default Projects
