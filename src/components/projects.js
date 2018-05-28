import React from 'react'

// components
import Section from './Section'
import Quote from './Quote'

const PROJECTS = [
  {
    id: 0,
    project: 'akitabox1',
    description: 'it was a blast!',
  },
  {
    id: 1,
    project: 'akitabox2',
    description: 'it was a blast!',
  },
  {
    id: 2,
    project: 'akitabox3',
    description: 'it was a blast!',
  },
  {
    id: 3,
    project: 'akitabox4',
    description: 'it was a blast!',
  },
  {
    id: 4,
    project: 'akitabox5',
    description: 'it was a blast!',
  },
  {
    id: 5,
    project: 'akitabox6',
    description: 'it was a blast!',
  },
  {
    id: 6,
    project: 'akitabox7',
    description: 'it was a blast!',
  },
  {
    id: 7,
    project: 'akitabox8',
    description: 'it was a blast!',
  },
  {
    id: 8,
    project: 'akitabox9',
    description: 'it was a blast!',
  },
  {
    id: 9,
    project: 'akitabox10',
    description: 'it was a blast!',
  },
  {
    id: 10,
    project: 'akitabox11',
    description: 'it was a blast!',
  },
  {
    id: 11,
    project: 'akitabox12',
    description: 'it was a blast!',
  },
  {
    id: 12,
    project: 'akitabox13',
    description: 'it was a blast!',
  },
  {
    id: 13,
    project: 'akitabox14',
    description: 'it was a blast!',
  },
]

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
        data={PROJECTS}
      >
        {({ list }) => {
          return list.map(item => <li>{item.project}</li>)
        }}
      </Section>
    )
  }
}

export default Projects
