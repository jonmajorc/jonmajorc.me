// modules
import React from 'react'
import Helmet from 'react-helmet'

// components
import Bio from '../components/Bio'
import Skills from '../components/Skills'
import Notes from '../components/Notes'
import Quote from '../components/Quote'

class Index extends React.Component {
  render() {
    return (
      <div className="home">
        <Helmet title={this.props.siteTitle} />
        <div className="section__wrapper">
          <Bio />
          <Quote className="bio__quote" quote="GOD. Family. Code." />
        </div>
        <div className="section__wrapper">
          <Skills />
          <Quote
            className="skills__quote"
            quote="One time I fought a velociraptor over a sandwich..."
          />
        </div>
        <div className="section__wrapper">
          <Notes notes={this.props.notes} />
          <Quote
            className="notes__quote"
            quote="If you make things and share them, your heart will at some point be broken. If you never share, it will harden. Your choice. — Todd Henry"
          />
        </div>
      </div>
    )
  }
}

export default Index
