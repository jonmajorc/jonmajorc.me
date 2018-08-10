// modules
import React from 'react'
import Helmet from 'react-helmet'

// components
import Bio from '../components/Bio'
import Projects from '../components/projects'
import Notes from '../components/Notes'
import Contact from '../components/Contact'
import Social from '../components/Social'

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet title={this.props.siteTitle} />
        <Bio />
        <Projects />
        <Notes notes={this.props.notes} />
        <Contact />
        <Social />
      </React.Fragment>
    )
  }
}

export default Index
