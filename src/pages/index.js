// modules
import React from 'react'
import Helmet from 'react-helmet'

// components
import Bio from '../components/Bio'
import Skills from '../components/Skills'
import Notes from '../components/Notes'
import Quote from '../components/Quote'
import Layout from '../components/layout'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="home">
          <Helmet title="Home" />
          <div className="section__wrapper">
            <Bio />
            <Quote
              className="bio__quote"
              quote="Saved by His grace alone. Husband, father, and Software Farmer 👨‍🌾"
            />
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
      </Layout>
    )
  }
}

export default Index
