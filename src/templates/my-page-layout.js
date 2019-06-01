import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-mdx'
import Layout from '../components/layout'

export default class MyPageLayout extends React.Component {
  render() {
    return (
      <Layout className="blog-post">
        <MDXRenderer>{this.props.data.mdx.code.body}</MDXRenderer>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query MDXQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      code {
        body
      }
    }
  }
`
