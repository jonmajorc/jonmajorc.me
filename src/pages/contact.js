import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Contact from '../components/Contact'
import Layout from '../components/layout'

export class BlogsPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title="Contact" />
        <Contact />
      </Layout>
    )
  }
}

export default BlogsPage
