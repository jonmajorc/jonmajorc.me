import React, { Component } from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import NotesComp from '../components/Notes'
import Layout from '../components/layout'

export class Notes extends Component {
  render() {
    return (
      <Layout>
        <section className="note-page">
          <Helmet title="Notes" />
          <NotesComp />
        </section>
      </Layout>
    )
  }
}

export default Notes
