// modules
import React from 'react'
import Helmet from 'react-helmet'

// components
import Bio from '../components/Bio'
import Layout from '../components/layout'
import BlogLatest from '../components/BlogLatest'

const Spacing = () => <div style={{ height: '70px' }} />

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="home">
          <Helmet title="Home" />
          <Bio />
          <Spacing />
          <BlogLatest />
        </div>
      </Layout>
    )
  }
}

export default Index
