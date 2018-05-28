import React from 'react'

// components
import Section from './Section'
import NoteCard from './NoteCard'

const NOTES = [
  {
    id: 0,
    title:
      'Id et quis laborum Lorem exercitation deserunt non reprehenderit consectetur cupidatat aliquip nostrud in pariatur. Magna eu laborum commodo ad id enim do anim id. Aliqua magna elit in enim et officia reprehenderit cupidatat velit eiusmod ex dolor reprehenderit.',
    description: 'it was a blast!',
  },
  {
    id: 1,
    title: 'akitabox2',
    description: 'it was a blast!',
  },
  {
    id: 2,
    title: 'akitabox3',
    description: 'it was a blast!',
  },
  {
    id: 3,
    title: 'akitabox4',
    description: 'it was a blast!',
  },
  {
    id: 4,
    title: 'akitabox5',
    description: 'it was a blast!',
  },
  {
    id: 5,
    title: 'akitabox6',
    description: 'it was a blast!',
  },
  {
    id: 6,
    title: 'akitabox7',
    description: 'it was a blast!',
  },
  {
    id: 7,
    title: 'akitabox8',
    description: 'it was a blast!',
  },
  {
    id: 8,
    title: 'akitabox9',
    description: 'it was a blast!',
  },
  {
    id: 9,
    title: 'akitabox10',
    description: 'it was a blast!',
  },
  {
    id: 10,
    title: 'akitabox11',
    description: 'it was a blast!',
  },
  {
    id: 11,
    title: 'akitabox12',
    description: 'it was a blast!',
  },
  {
    id: 12,
    title: 'akitabox13',
    description: 'it was a blast!',
  },
  {
    id: 13,
    title: 'akitabox14',
    description: 'it was a blast!',
  },
]

class Notes extends React.Component {
  render() {
    return (
      <Section
        className="notes"
        id="notes"
        section="notes"
        opening="["
        closing="]"
        limit={5}
        data={NOTES}
      >
        {({ list }) => {
          return (
            <div className="content">
              {list.map(item => {
                return (
                  <div key={item.id} className="note">
                    <NoteCard>{item.title}</NoteCard>
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

export default Notes
