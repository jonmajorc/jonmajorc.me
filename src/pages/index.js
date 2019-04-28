// modules
import React from 'react'
import Helmet from 'react-helmet'

// components
import Bio from '../components/Bio'
import Layout from '../components/layout'
import Blog from '../components/Blog'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="home">
          <Helmet title="Home" />
          {/* <div className="section__wrapper"> */}
          <Bio />
          <div style={{ height: '70px' }} />
          <Blog />
          {/* </div> */}
        </div>
      </Layout>
    )
  }
}

export default Index
